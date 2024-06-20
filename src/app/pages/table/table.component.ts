import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent  implements OnInit{
  private commentService: CommentService= inject(CommentService)
  commentList: Comment[]=[]
  commentListFiltrado: Comment[]=[]
  @ViewChild('txtBuscar') txtBuscar!: ElementRef;
  // txtBuscar = viewChild<ElementRef>('txtBuscar');

  ngOnInit(): void {
    this.commentService.get().subscribe(response =>{
      this.commentList = response
      this.commentListFiltrado = response
    } )
  }

  buscar(){
    let filtro = this.txtBuscar.nativeElement.value

   this.commentListFiltrado = this.commentList.filter(elemento=> {
      return (elemento.postId.toString().includes(filtro)
    || elemento.id.toString().includes(filtro)
    || elemento.name.toLocaleLowerCase().includes(filtro)
    || elemento.email.toLocaleLowerCase().includes(filtro)
    || elemento.body.toLocaleLowerCase().includes(filtro)
    );
    })


console.log(this.txtBuscar.nativeElement.value)
  }
}
