import * as information from './information.json';

export const help = ():String => {
    let helpMenu:String = '';

    helpMenu += '\nYou can use the following commands here.\n\n' +
        'about - shows basic information about myself\n' +
        'interests - shows my current research interests\n' +
        'publications - a list of my published research work\n' +
        'learning - what I\'m currently learning\n' +
        'contact - shows contact information\n' +
        'blog - opens a new tab with my blog\n' +
        'medium - opens a new tab with my blog\n' +
        'photography - takes you to my flickr profile\n' +
        'github - takes you to my github profile\n';


    return helpMenu;
};

export const about = (): String => {
    let info:String = '';

    info += '\nThis section will be updated more soon.' +
        `\nHi! I'm ${information.name}.\n` +
        `I'm currently doing my ${information.msDegree} at ${information.bsUni}. ` +
        
        `I'm a native of ${information.hometown}, currently living in Dhaka.\n` +
        '\n\n' +
        `My hobbies include(but not limited to!) ${information.hobbies}.\n` +
        `Music? ${information.music}.`;
        
    return info
};

export const interests = ():String => information.interestedIn;

export const publications = ():String => {
    let pub:String = '';

    pub += 'I do not have any publications as of yet. This section will be updated soon.';

    // for (let i in information.publications) {
    //     pub += `\n-\n` +
    //         `${information.publications[i].title}\n` +
    //         `${information.publications[i].link}\n`;
    // }

    return pub;
};

export const learning = (): String => information.nowLearning;

export const contact = ():String => {
    return `\nemail - ${information.email}` +
        `\ngithub - ${information.github}` +
        `\nblog - My blog will be updated soon` +
        `\nmedium - Medium account will be updated soon!` 
        // `\nflickr - ${information.flickr}` + 
        // `\ntwitter - ${information.twitter}` +
        // `\nacm-vcard - ${information.acm_vcard}`;
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

