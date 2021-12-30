import { Component } from '@angular/core';

@Component({
  selector: 'mr-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  mediaItems = [

    {
      url: "https://www.facebook.com/marceroffe",
      src: "assets/img/social-media/facebook.png",
      alt: "Facebook"
    },

    {
      url: "https://www.twitter.com/marceloroffe",
      src: "assets/img/social-media/twitter.png",
      alt: "Twitter"
    },

    {
      url: "https://www.linkedin.com/in/marcelo-roffe-58358a31",
      src: "assets/img/social-media/linkedin.png",
      alt: "LinkedIn"
    },

    {
      url: "https://www.youtube.com/user/roffevideos",
      src: "assets/img/social-media/youtube.png",
      alt: "YouTube"
    },

    {
      url: "https://www.instagram.com/marcelo.roffe/",
      src: "assets/img/social-media/instagram.png",
      alt: "Instagram"
    },

    {
      url: "https://es.wikipedia.org/wiki/Marcelo_Roffé",
      src: "assets/img/social-media/wikipedia.png",
      alt: "Wikipedia"
    }

  ];

}
