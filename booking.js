const params=new URLSearchParams(location.search);
const type=params.get("type"), id=params.get("id");
const isHotel=type==="hotel";
const item=(isHotel?hotels:restaurants).find(x=>String(x.id)===String(id));
const fields=document.getElementById("bookingFields");
const form=document.getElementById("bookingForm");
const today=new Date().toISOString().slice(0,10);
const get=(name)=>form.elements[name]?.value;
const money=n=>"₹"+Number(n).toLocaleString("en-IN");
const paymentField=`
  <div class="booking-field">
    <label for="paymentMode">Payment Mode</label>
    <select id="paymentMode" name="paymentMode" required>
      <option value="Cash">Cash</option>
      <option value="Online Payment">Online Payment</option>
    </select>
  </div>`;
if(!item || !["hotel","restaurant"].includes(type)){
 document.getElementById("bookingInfo").innerHTML="<h2>Booking item not found</h2><a href='hotels.html'>Hotels</a> | <a href='restaurants.html'>Restaurants</a>";
 form.remove();
}else{
 document.getElementById("bookingTitle").textContent=isHotel?"Hotel Room Booking":"Restaurant Table Booking";
 document.getElementById("bookingSubtitle").textContent=item.name+" · "+item.city+", Rajasthan";
 document.getElementById("bookingInfo").innerHTML=`<h2>${item.name}</h2><p>${item.description}</p><p><b>Location:</b> ${item.city}, Rajasthan</p>`;
 if(isHotel){
  const rooms=[{name:"Standard Room",price:2500,available:4},{name:"Deluxe Room",price:4000,available:3},{name:"Premium Suite",price:6500,available:2}];
  fields.innerHTML=`
  <div class="booking-field"><label>Check-in Date</label><input type="date" name="checkin" min="${today}" required></div>
  <div class="booking-field"><label>Check-out Date</label><input type="date" name="checkout" min="${today}" required></div>
  <div class="booking-field"><label>Room Type</label><select name="room">${rooms.map((r,i)=>`<option value="${i}">${r.name} — ${money(r.price)} / night</option>`).join("")}</select></div>
  <div class="booking-field"><label>Number of Rooms</label><select name="quantity"><option>1</option><option>2</option><option>3</option><option>4</option></select></div>
  <div class="booking-field"><label>Adults</label><input type="number" name="adults" min="1" max="10" value="2" required></div>
  <div class="booking-field"><label>Children</label><input type="number" name="children" min="0" max="8" value="0"></div>
  ${paymentField}`;
  const update=()=>{const a=get("checkin"),b=get("checkout"),n=a&&b?(new Date(b)-new Date(a))/86400000:0,r=rooms[Number(get("room")||0)],q=Number(get("quantity")||1);document.getElementById("bookingTotal").innerHTML=`Estimated total: <strong>${n>0?money(n*r.price*q):"Select valid dates"}</strong><br><small>${n>0?`${n} night(s) · ${q} room(s) · ${r.name}`:"Check-out must be after check-in."}</small>`;};
  fields.addEventListener("change",update);fields.addEventListener("input",update);update();
  form.addEventListener("submit",e=>{e.preventDefault();const a=get("checkin"),b=get("checkout"),n=(new Date(b)-new Date(a))/86400000;if(!a||!b||n<=0){alert("Please select a valid check-in and check-out date.");return;}const r=rooms[Number(get("room"))],q=Number(get("quantity"));saveBooking({type,place:item.name,city:item.city,date:a,details:`${r.name}; ${q} room(s); ${n} night(s); ${get("adults")} adult(s), ${get("children")} child(ren)`,total:n*r.price*q,paymentMode:get("paymentMode"),name:get("name"),email:get("email"),phone:get("phone")});});
 }else{
  fields.innerHTML=`
  <div class="booking-field"><label>Reservation Date</label><input type="date" name="date" min="${today}" required></div>
  <div class="booking-field"><label>Time Slot</label><select name="time"><option>12:00 PM</option><option>1:00 PM</option><option>2:00 PM</option><option>7:00 PM</option><option>8:00 PM</option><option>9:00 PM</option></select></div>
  <div class="booking-field"><label>Number of Guests</label><input type="number" name="guests" min="1" max="20" value="2" required></div>
  <div class="booking-field"><label>Table Preference</label><select name="table"><option>Any available table</option><option>Indoor</option><option>Outdoor</option><option>Family table</option></select></div>
  <div class="booking-field"><label>Special Request</label><input name="request" placeholder="Optional request"></div>
  ${paymentField}`;
  document.getElementById("bookingTotal").innerHTML="Restaurant reservation request";
  form.addEventListener("submit",e=>{e.preventDefault();saveBooking({type,place:item.name,city:item.city,date:get("date"),details:`${get("time")}; ${get("guests")} guest(s); ${get("table")}; ${get("request")||"No special request"}`,total:0,paymentMode:get("paymentMode"),name:get("name"),email:get("email"),phone:get("phone")});});
 }
 const personal=document.createElement("div");personal.className="booking-grid";personal.innerHTML=`<div class="booking-field"><label>Full Name</label><input name="name" form="bookingForm" required placeholder="Your name"></div><div class="booking-field"><label>Email</label><input name="email" form="bookingForm" type="email" required placeholder="Email address"></div><div class="booking-field"><label>Mobile Number</label><input name="phone" form="bookingForm" required pattern="[0-9]{10}" maxlength="10" placeholder="10-digit mobile"></div>`;
 form.insertBefore(personal,form.querySelector(".booking-total"));
}
function saveBooking(data){const key="rajasthanBookings";const all=JSON.parse(localStorage.getItem(key)||"[]");const booking={...data,id:"RJ"+Date.now(),status:"Pending"};all.unshift(booking);localStorage.setItem(key,JSON.stringify(all));alert("Demo booking request saved! Booking ID: "+booking.id);location.href="my-bookings.html";}
