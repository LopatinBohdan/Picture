import { Picture } from "./picture";

export class PictureService{
    public collection:Picture[]=[
        {title:"title1",year:"1991",author:"author1",size:"size1",place:"place1", path:"../assets/img/img1.jpg"},
        {title:"title2",year:"1992",author:"author2",size:"size2",place:"place2", path:"../assets/img/img2.jpg"},
        {title:"title3",year:"1993",author:"author3",size:"size3",place:"place3", path:"../assets/img/img3.jpg"},
        {title:"title4",year:"1994",author:"author4",size:"size4",place:"place4", path:"../assets/img/img4.jpg"},
    ]

    // getData():Picture[]{
    //     return this.collection;
    // }
}