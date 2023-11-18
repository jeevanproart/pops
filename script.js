const btn = document.querySelector("#throttle");

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    };
};

document.querySelector("#rect").addEventListener("mousemove", throttleFunction((details) => {
    const div = document.createElement("div");
    div.classList.add('imagediv');
    div.style.left = details.clientX + 'px';
    div.style.top = details.clientY + 'px';

    const imageUrls = [
        "https://plus.unsplash.com/premium_photo-1663100136561-f88c175a7314?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1586339949216-35c2747cc36d?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1557428894-56bcc97113fe?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1508612761958-e931d843bdd5?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://media.istockphoto.com/id/1664158578/photo/multiple-television-screens-with-remote-control.jpg?s=1024x1024&w=is&k=20&c=NZEJh_csdMsZDVEHXGFlByZZXgDwudi7LaYMdOgFAOg="
        // Add more image URLs as needed

    ];

    const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

    const img = document.createElement("img");
    img.setAttribute("src", randomImageUrl);
    div.appendChild(img);

    document.body.appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 2000);

    gsap.to(img, {
        y: "0%",
        ease: "power1",
        duration: 1
    });

    gsap.to(img, {
        y: "100%",
        delay: 1,
        ease: "power1",
        duration: 0.5
    });

}, 500));
