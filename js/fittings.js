class Step {
    constructor(title, image, description) {
        this.title = title;
        this.image = image;
        this.description = description;
    }
}

htmlToElement = html => {
    let template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
};

addStepToSteps = step => {
    let stepTemplate = `
    <div class="step">
        <h1>${step.title}</h1>
        <img src="${step.image}">
        <p>${step.description}</p>
    </div>
    `;
    stepContainer.append(htmlToElement(stepTemplate));
}

let stepContainer = document.querySelector('.steps'); //may move

let steps = [
    new Step('1. Schedule your fitting', 'https://cdn.tristaterunning.com/client/to_webp,q_lossy,ret_img,w_672/https://tristaterunning.com/wp-content/uploads/2020/04/Snag_a9070e.png', 'Visit our scheduling site to schedule your virtual fitting'),
    new Step('2. Join the video chat', 'https://cdn.tristaterunning.com/client/q_lossy,ret_img,w_1443/https://tristaterunning.com/wp-content/uploads/2020/04/Snag_126a002.png', 'Join the session using Microsoft Teams on your laptop, phone, or tablet'),
    new Step('3. Have a conversation', 'https://cdn.tristaterunning.com/client/to_webp,q_lossy,ret_img,w_681/https://tristaterunning.com/wp-content/uploads/2020/04/Snag_913d07.png', 'Chat with an expert and answer some questions about your fitness goals to determine what’s the best gear for you. Please have your current shoes and orthotics available.'),
    new Step('4. Movement activities and sizing', 'https://cdn.tristaterunning.com/client/to_webp,q_lossy,ret_img,w_672/https://tristaterunning.com/wp-content/uploads/2020/04/Snag_d2c9ca.png', 'Gait matters. To best assess, we may ask you to lace up and do some movement activities. Using your current shoe and feedback, along with our knowledge of the differences among models, we’ll determine proper sizing.'),
    new Step('5. Shoe Recommendations', 'https://cdn.tristaterunning.com/client/to_webp,q_lossy,ret_img,w_682/https://tristaterunning.com/wp-content/uploads/2020/04/Snag_928efb.png', "We’ll show you shoes that will be the best fit for you and your needs. Pick what you like! Need other goodies to keep you running? We can recommend apparel and accessories too!"),
    new Step('6. Order shoes online', 'https://cdn.tristaterunning.com/client/to_webp,q_lossy,ret_img,w_671/https://tristaterunning.com/wp-content/uploads/2020/04/Snag_93130f.png', 'We’ll guide you to our online shop to complete your shopping experience. Shoes can be shipped or picked up curbside at select stores.'),
    new Step('7. Unboxing', 'https://cdn.tristaterunning.com/client/to_webp,q_lossy,ret_img,w_665/https://tristaterunning.com/wp-content/uploads/2020/04/Snag_93b3f3.png', 'Yay, your perfect shoe arrived! If you’re not happy, we will happily arrange a new virtual fitting to exchange for better fit or offer a refund.'),
    new Step('9. Keep Moving', 'https://cdn.tristaterunning.com/client/to_webp,q_lossy,ret_img,w_674/https://tristaterunning.com/wp-content/uploads/2020/04/Snag_943807.png', 'Get out where you can and enjoy your run. Follow us on social for social distancing runs, challenges, and community connection.')
];

for(let i = 0; i < steps.length; i++) {
    let current = steps[i];
    addStepToSteps(current);
}