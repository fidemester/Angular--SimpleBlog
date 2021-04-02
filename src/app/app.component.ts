import { Component } from '@angular/core';
export interface Post{
  body:string,
  userId:number,
  id: number,
  title:string,
  postImg:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleBlog';
  posts:Post[] = [{
    postImg:'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
    {
      postImg:'https://i.picsum.photos/id/284/200/300.jpg?grayscale&hmac=yxCyysxOBDYPpVbk4sqxk-o6eG0jAl5ws1x4uxQA1tg',
      userId: 1,
      id: 2,
      title: 'veni vini vici',
      body: 'Eltoranta de halamo expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      postImg:'https://picsum.photos/200/300?grayscale',
      userId: 1,
      id: 3,
      title: ' occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      postImg:'https://picsum.photos/200/300?grayscale',
      userId: 1,
      id: 4,
      title: ' reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      postImg:'https://i.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0',
      userId: 1,
      id: 5,
      title: 'Congitio ergolutio es parade',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    }];
}
