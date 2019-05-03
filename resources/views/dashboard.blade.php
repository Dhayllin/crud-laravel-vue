@extends('app')

@section('content')
   <div id="crud"class="row">
       <div class="col-xs-12">
            <h1> CRUD Laravel e Vue</h1>
       </div>
       <hr><br>
       <div class="col-sm-7">
           <a href="#" class="btn btn-primary pull-right"> Novo Tarefa</a>
       </div>

       <table class="table table-hover table-striped">
           <thead>
               <tr>
                   <th>ID</th>
                   <th>Tarefa</th>
                   <th colspan="2">
                       &nbsp;
                   </th>
               </tr>
           </thead>
           <tbody>
               <tr v-for=" keep in keeps">
               <td width="10px">@{{ keep.id}}</td>
               <td>@{{ keep.keep}}</td>
                   <td width="10px"> <a href="#" class="btn btn-warning btn-sm">Editar</a></td>
                   <td width="10px"><a href="#" class="btn btn-danger btn-sm" v-on:click.prevent="deleteKeeps(keep)">Delete</a></td>
               </tr>
           </tbody>
       </table>
       <div class="col-sm-5">
            <pre>
              @{{ keeps }}
            </pre>
        </div>
   </div>   
@stop