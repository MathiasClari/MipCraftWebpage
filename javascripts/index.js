let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let mountains_front = document.getElementById("mountains_front");
let header = document.querySelector('header');
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})

let sec2 = document.getElementById("sec2");
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    sec2.style.marginBottom = value * 0.5 + 'px';
})

let head = document.getElementById("pxlib");
head.addEventListener('click',function(){
    let staffname = document.getElementById("staff-name");
    staffname.textContent = "PxLib";
    let staffrole = document.getElementById("staff-role");
    staffrole.textContent = "Owner";
    let staffdesc = document.getElementById("staff-description");
    staffdesc.textContent = "Hey, I’m Ben! As the founder of Origin Realms, my main tasks revolve around planning and organising new and exciting content for everyone to enjoy on a weekly basis. Keeping everyone on track is a busy job, but when I’m not working with the team to make awesome stuff, you’ll see lots of me on the server and the Discord - don’t be a stranger if you see me around!";
    let staffimg = document.getElementById("staff-body-img");
    staffimg.src = "https://mc-heads.net/body/4d0a0816-62bc-4102-bb05-5d0e2fc49910";

})

let head2 = document.getElementById("yuvalloll");
head2.addEventListener('click',function(){
    let staffname = document.getElementById("staff-name");
    staffname.textContent = "Yuvalloll";
    let staffrole = document.getElementById("staff-role");
    staffrole.textContent = "Co-Owner";
    let staffdesc = document.getElementById("staff-description");
    staffdesc.textContent = "Hey, I’m Ben! As the founder of Origin Realms, my main tasks revolve around planning and organising new and exciting content for everyone to enjoy on a weekly basis. Keeping everyone on track is a busy job, but when I’m not working with the team to make awesome stuff, you’ll see lots of me on the server and the Discord - don’t be a stranger if you see me around!";
    let staffimg = document.getElementById("staff-body-img");
    staffimg.src = "https://mc-heads.net/body/d93e7ec3-60f4-4885-82bb-c2aa9b45037e";

})

let head3 = document.getElementById("pumpkin");
head3.addEventListener('click',function(){
    let staffname = document.getElementById("staff-name");
    staffname.textContent = "The_Pumpkin_";
    let staffrole = document.getElementById("staff-role");
    staffrole.textContent = "Lead Manager";
    let staffdesc = document.getElementById("staff-description");
    staffdesc.textContent = "Hey, I’m Ben! As the founder of Origin Realms, my main tasks revolve around planning and organising new and exciting content for everyone to enjoy on a weekly basis. Keeping everyone on track is a busy job, but when I’m not working with the team to make awesome stuff, you’ll see lots of me on the server and the Discord - don’t be a stranger if you see me around!";
    let staffimg = document.getElementById("staff-body-img");
    staffimg.src = "https://mc-heads.net/body/9267ed58-bf36-4607-bdfa-4ccc5f03a634";

})

let head4 = document.getElementById("jernejtdo");
head4.addEventListener('click',function(){
    let staffname = document.getElementById("staff-name");
    staffname.textContent = "JernejTDO";
    let staffrole = document.getElementById("staff-role");
    staffrole.textContent = "Co-Owner";
    let staffdesc = document.getElementById("staff-description");
    staffdesc.textContent = "Hey, I’m Ben! As the founder of Origin Realms, my main tasks revolve around planning and organising new and exciting content for everyone to enjoy on a weekly basis. Keeping everyone on track is a busy job, but when I’m not working with the team to make awesome stuff, you’ll see lots of me on the server and the Discord - don’t be a stranger if you see me around!";
    let staffimg = document.getElementById("staff-body-img");
    staffimg.src = "https://mc-heads.net/body/6a82f9d8-e046-464e-8674-a008088210b8";

})

let head5 = document.getElementById("java");
head5.addEventListener('click',function(){
    let staffname = document.getElementById("staff-name");
    staffname.textContent = "Java4Life_";
    let staffrole = document.getElementById("staff-role");
    staffrole.textContent = "Developer";
    let staffdesc = document.getElementById("staff-description");
    staffdesc.textContent = "Hey, I’m Ben! As the founder of Origin Realms, my main tasks revolve around planning and organising new and exciting content for everyone to enjoy on a weekly basis. Keeping everyone on track is a busy job, but when I’m not working with the team to make awesome stuff, you’ll see lots of me on the server and the Discord - don’t be a stranger if you see me around!";
    let staffimg = document.getElementById("staff-body-img");
    staffimg.src = "https://mc-heads.net/body/813cc5f9-4958-46d8-9f79-fbaa491adf08";

})

let head6 = document.getElementById("greazi");
head6.addEventListener('click',function(){
    let staffname = document.getElementById("staff-name");
    staffname.textContent = "Greazi";
    let staffrole = document.getElementById("staff-role");
    staffrole.textContent = "Developer";
    let staffdesc = document.getElementById("staff-description");
    staffdesc.textContent = "Hey, I’m Ben! As the founder of Origin Realms, my main tasks revolve around planning and organising new and exciting content for everyone to enjoy on a weekly basis. Keeping everyone on track is a busy job, but when I’m not working with the team to make awesome stuff, you’ll see lots of me on the server and the Discord - don’t be a stranger if you see me around!";
    let staffimg = document.getElementById("staff-body-img");
    staffimg.src = "https://mc-heads.net/body/f314a975-23c0-462f-a960-2bcfcdb3debe";

})

let head7 = document.getElementById("iLunarixx");
head7.addEventListener('click',function(){
    let staffname = document.getElementById("staff-name");
    staffname.textContent = "iLunarixx";
    let staffrole = document.getElementById("staff-role");
    staffrole.textContent = "Developer";
    let staffdesc = document.getElementById("staff-description");
    staffdesc.textContent = "Hey, I’m Ben! As the founder of Origin Realms, my main tasks revolve around planning and organising new and exciting content for everyone to enjoy on a weekly basis. Keeping everyone on track is a busy job, but when I’m not working with the team to make awesome stuff, you’ll see lots of me on the server and the Discord - don’t be a stranger if you see me around!";
    let staffimg = document.getElementById("staff-body-img");
    staffimg.src = "https://mc-heads.net/body/b587f252-7aae-4bdd-90cd-c5e27aaa35f6";

})

let head8 = document.getElementById("volcan");
head8.addEventListener('click',function(){
    let staffname = document.getElementById("staff-name");
    staffname.textContent = "SO_Volcan";
    let staffrole = document.getElementById("staff-role");
    staffrole.textContent = "Quality manager";
    let staffdesc = document.getElementById("staff-description");
    staffdesc.textContent = "Hey, I’m Ben! As the founder of Origin Realms, my main tasks revolve around planning and organising new and exciting content for everyone to enjoy on a weekly basis. Keeping everyone on track is a busy job, but when I’m not working with the team to make awesome stuff, you’ll see lots of me on the server and the Discord - don’t be a stranger if you see me around!";
    let staffimg = document.getElementById("staff-body-img");
    staffimg.src = "https://mc-heads.net/body/6186d473-ea70-4c36-a347-2e2b3c3ef5e6";

})


let head11 = document.getElementById("lex");
head11.addEventListener('click',function(){
    let staffname = document.getElementById("staff-name");
    staffname.textContent = "LexLex";
    let staffrole = document.getElementById("staff-role");
    staffrole.textContent = "Developer";
    let staffdesc = document.getElementById("staff-description");
    staffdesc.textContent = "Hey, I’m Ben! As the founder of Origin Realms, my main tasks revolve around planning and organising new and exciting content for everyone to enjoy on a weekly basis. Keeping everyone on track is a busy job, but when I’m not working with the team to make awesome stuff, you’ll see lots of me on the server and the Discord - don’t be a stranger if you see me around!";
    let staffimg = document.getElementById("staff-body-img");
    staffimg.src = "https://mc-heads.net/body/f46335b5-be0f-4c99-93da-7305861baa3e";

})


let head9 = document.getElementById("glorytdo");
head9.addEventListener('click',function(){
    let staffname = document.getElementById("staff-name");
    staffname.textContent = "GloryTDO";
    let staffrole = document.getElementById("staff-role");
    staffrole.textContent = "Designer";
    let staffdesc = document.getElementById("staff-description");
    staffdesc.textContent = "Hey, I’m Ben! As the founder of Origin Realms, my main tasks revolve around planning and organising new and exciting content for everyone to enjoy on a weekly basis. Keeping everyone on track is a busy job, but when I’m not working with the team to make awesome stuff, you’ll see lots of me on the server and the Discord - don’t be a stranger if you see me around!";
    let staffimg = document.getElementById("staff-body-img");
    staffimg.src = "https://mc-heads.net/body/578ea34f-316f-4f80-9645-57d24bdd78ec";

})


