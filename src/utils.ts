import * as information from './information.json';

export const help = ():String => {
    let helpMenu:String = '';

    helpMenu += '\nKindly use the following commands.\n\n' +
        '1. help - to check out all the commands.\n' +
        '2. clear - To clear the terminal\n' +
        '3. about - To know about me\n' +
        '4. interests - Shows areas of my current and future interests\n' +
        //'publications - a list of my published research work\n' +
        '5. learning - what I\'m currently learning\n' +
        '6. next - Shows what I want to pursue next\n' +
        '7. contact - Shows contact information\n' +
        //'8. blog - (Work in progress...)\n' +
        //'9. medium - (Work in progress...)\n' +
        // 'photography - takes you to my flickr profile\n' +
        '8. github - Takes you to my github profile\n' +
        '9. manliness - Philosophy behind what it means to be a Man\n' +
        '10. books - My list of Book Recommendations\n' + 
        '11. films - My Film Making journey\n' + 
        '12. tech - List of techs that I am currently focusing\n'


    return helpMenu;
};

export const about = (): String => {
    let info:String = '';

    info += '\n\nThis section like others will be updated as time progresses.' +
        `\nHi! I'm ${information.name}.\n` +
        `I'm currently a graduate of ${information.bsDegree} from ${information.bsUni}. ` +
        `I'm from ${information.hometown}, currently living in Dhaka.\n` +
        '\n\n' +
        `My interests are vast from Technology,Business,Reading fiction/non-fictions, Sports,\nPhilosophy to  learning a bunch of interesting and weird things.` +
        `\nI am on my journey to becoming the best version of myself. My whole life purpose is engulfed by only one aspiration, that is to help others without any expectations.`;
        
    return info
};

export const interests = ():String => information.interestedIn;
export const tech = ():String => {
    return "I am a Computer Science major. I graduated from North South University." + "\nI am currently working with MERN stack. However, looking to get into Django.\n\n" + 
    "AI and Data Science: This field seems cool. Looking to dive in soon..."
};

export const next = ():String => {
    return "Currently I am working on my Tech Algorithmic Interview skills and Calisthenics."
};

// export const publications = ():String => {
//     let pub:String = '';

//     pub += 'I do not have any publications as of yet. This section will be updated soon.';

//     // for (let i in information.publications) {
//     //     pub += `\n-\n` +
//     //         `${information.publications[i].title}\n` +
//     //         `${information.publications[i].link}\n`;
//     // }

//     return pub;
// };

export const learning = (): String =>  information.nowLearning;

export const contact = ():String => {
    return `\nEmail - ${information.email}` +
        `\nGithub - ${information.github}` +
        `\nBlog - Currently Work in progress` +
        `\nMedium - Currently Work in progress!` +
        `\nLinkedIn - ${information.linkedin}` 
        //"linkedin": "https://www.linkedin.com/in/mohammad-bakshi-0b20051a7/"
        // `\nflickr - ${information.flickr}` + 
        // `\ntwitter - ${information.twitter}` +
        // `\nacm-vcard - ${information.acm_vcard}`;
};
export const manliness = ():String => {
    return "This is a philosophy that I'm trying to constantly learn and upgrade. It requires a lot of free thinking and seeking new knowledge. which I struggle to do sometimes as well." +
    "Men should be men. And my childhood experiences of being the nice guy largely affected me. Until I decided to learn how to be a Man." + 
    "I had to go through many internal challenges. Those who are introvert from childhood will understand the struggle. I'll be updating this here and my philosophy of being a man once my blog is up." + 
    "Some of the transformation I had to go through (till now)\n 1.Face my fears 2. Learn to deal with my insecurities 3. Approach Girls and learn to attract women 4.Talk to strangers etc. I am still working on myself so...";
        
};
export const books = ():String => {
    return `Book Recommendations
Fiction: I haven't gotten into Fiction. Please Recommend me some through email)

Non-Fiction: 
1. Atomic Habits 
2. Models: attract women through honesty 
3. Can't Hurt Me 
4. The obstacle is the way and more...`
        
};

export const films = ():String => {
    return "Film making has been one of my hobbies. Unfortunately even though I have my skills due to lack of money,tech and time haven't been able to put out some content. My focus currently is on my Career. I would like to get back to film making soon.\n" + 
    "However, I have worked with my closest friends and co-founded Half Cake Productions. Check us out:\n\n" + 
    "Youtube: Half Cake Productions \nInstagram: Search Half Cake Productions\n"
        
};

export const takeTo = (key:string):string => {
    let url:string = '';

    switch (key) {
        case 'blog':
            url = information.blog;
            break;
        case 'medium':
            url = information.medium;
            break;
        
        case 'github':
            url = information.github;
            break;
        default:
            break;
    }


    window.open(url, '_blank');
    return url;
};

