import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export const store = {
    name:"Swaggy",
    coverImage:"https://images.unsplash.com/photo-1708773941598-84d82fb03328?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverText:{
        t1:"BEST OF SEASON SALE",
        t2:"SAVE 40% OFF",
        t3:"DISCOVER NOW",
    }

}

export const header = {
    notification:"Free Delivery For Members"
}

export const sidebar = {
    links:[
        {
            title:"Home",
            href:"/"
        },
        {
            title:"About",
            href:"/about"
        },
        {
            title:"Contact",
            href:"/contact"
        },
        {
            title:"Login",
            href:"/login"
        },
       
    ],
    social:[
        {
            Icon:FaFacebookF,
            link:"https://www.facebook.com/",
            title:"Facebook",
            color:"#316FF6"
        },
        {
            Icon:FaInstagram,
            link:"https://www.instagram.com/",
            title:"Instagram",
            color:"#fa7e1e"
        },
        {
            Icon:FaXTwitter,
            link:"https://twitter.com/",
            title:"Twitter",
            color:"#14171A"
        },
        {
            Icon:FaYoutube,
            link:"https://www.youtube.com/",
            title:"Youtube",
            color:"#FF0000"
        },
    ]
}

