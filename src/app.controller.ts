import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entities/Student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
// endpoint puesta de proyecto
//acepta peticiones de clientes bajo una URL Semantica
// retornar los datos esperados por alguien
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // Segundo Endpoint ESTRUCTURAR
  // 1.verbo HTTP sobre el cual recibir
  // Metodos disponibles: get,post,put,delete
  // 2.firma del metodo a ejecutar cuando se invoque el endpoint

  @Get("/ficha")
  getFicha(): string {
    return "endpoint de la ficha 2902093"

  }


  @Get("/identificacion/:id/ciudad/:ciudad")
  identificacion(@Param("id") id:string,
                 @Param("ciudad") ciudad:string,
                 @Query("nombre") nombre:String,
                 @Query("edad") edad:Number):Student{
    
                  return new Student(+id,nombre,edad,ciudad,);
}

}