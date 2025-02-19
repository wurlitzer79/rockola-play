    const movies = [
	 <!-- ********** PELICULAS INFANTILES ***************************************************************************************************************** -->	  	
      { title: 'Pelicula Infantil<br>Angry Bird 1', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BNjRlNmIxN2ItMDE4NS00NTM2LTllNTEtNzAwZTIzZmE0YzA2XkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/ANGRY%20BIRDS%201.mp4' 
	  }
     ,{ title: 'Pelicula Infantil<br>Angry Bird 2', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMzJmZTY2ZTktZDVlYy00Y2VjLWJiZjMtMmUzZDVhOGU4NjdiXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/ANGRY%20BIRDS%202.mp4' 
	  }	  
     ,{ title: 'Pelicula Infantil<br>Bambi', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTMxODViNTQtNjVlNC00Zjg2LTk1MDktZTZhM2I4YjhiZWRkXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BAMBI%201.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Barbie Cascanueces', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BZTE0OWE5ZTctM2U2YS00MWQyLWFkODAtMjI3Mzg0MWY3ZmQ5XkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20CASCANUECES.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Barbie En Busca de Perritos', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BYTgyNGYwMTUtY2I5OC00YTUwLWEwZjctN2ZmZjliODg5Yzc1XkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20EN%20BUSCA%20DE%20PERRITOS.mp4'
	  }	  
     ,{ title: 'Pelicula Infantil<br>Barbie Escuela de Princesas', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMmM5MjNjNzUtZDdlMC00MDU4LWE3MjEtN2EyYWU4ZWUxZTgyXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20ESCUELA%20DE%20PRINCESAS.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Barbie Princesa y la Plebeya', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BYjQxYjg4NTktZDQ2Mi00YTZhLTlkMDAtMGYyNGIxNjRjZTg0XkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20LA%20PRINCESA%20Y%20LA%20PLEBEYA.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Barbie Princesa de las Islas', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BZDljMjhlOTAtM2NmMC00OThmLTk3OTItYmE1NDM3ZDJlMzQxXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20PRINCESA%20DE%20LAS%20ISLAS.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Barbie Pulgarcita', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BNDdjYWQxYzgtOWNhNS00ODhjLWI5ZjAtOGRkNTliMzBmYzZkXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20PULGARCITA.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Barbie El Secreto de las Hadas', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BZjM1NjI1ZTUtYzRkOC00NDE1LTgxZmUtMTgxYTYxMjJhMDZkXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20SECRETO%20DE%20LAS%20HADAS.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Barbie Las Tres Mosqueteras', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BYWQ4MjVhZmYtZGM2OS00Yjg1LWJlZWUtZjUwYzliMzI1M2ZiXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20TRES%20MOSQUETERAS.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Barbie Una Aventura Espacial', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjI3NDUyYmMtODNjMS00MGU5LTk5MTktNTY5NmIzMzA4MjIwXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20UN%20AVENTURA%20ESPACIAL.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Barbie Una Aventura de Caballos', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMWJhYjRkYjMtMTUxNC00NmYyLTk3NDgtY2ZhNDg0NDYxYmUxXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20UNA%20AVENTURA%20DE%20CABALLOS.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Barbie Y las Doce Princesas Bailarinas', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMmVkNDNiMmUtYzU0NS00ODdhLThmMGItMDEwMjUzNWNlMTY1XkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20Y%20LAS%20DOCE%20PRINCESAS%20BAILARINAS.mp4'
	  }	  	  	  
     ,{ title: 'Pelicula Infantil<br>Bichos', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMzRmZmZkZjctMmJiOS00MTFiLTg2YmUtY2E3ZjZiZjA2MzA0XkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BICHOS.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Buscando a Nemo', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTFiMjA0NjAtZTEwYS00MWRiLWI3MGEtMDlkZGY1MDQ4NjhiXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BUSCANDO%20A%20NEMO.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Buscando a Dory', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BOTc3ZjNkMjctOTY4Zi00MjM3LWJjZTktMGRkYTFlYTMxY2MyXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BUSCANDO%20A%20DORY.mp4'
	  }	  	  	  
     ,{ title: 'Pelicula Infantil<br>Cars 2', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/CARS%202.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Cars 3', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BZTEyMTJjMzUtYTcyOC00OGVhLWE4YWUtYzM3YWM1Y2JiMzQzXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/CARS%203.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Chico Bon Bon Un Mono con Herramientas', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMGJlOWFkMGItMWUzMi00ZjU1LWE3OWQtNjkzMDYwOTgzY2JmXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/CHICO%20BOM%20BOM.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Dino Time', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTYzOTM3NjY4MF5BMl5BanBnXkFtZTcwMzMzMDY2OA@@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/DINO%20TIME.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>El Lorax', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BYTRhYTBkNjgtOTVjNi00OTZmLWJlMWYtNWRkZDJiMmVmMDEwXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/EL%20LORAX.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>El Rey León 2', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjA1MDUxNjI4OF5BMl5BanBnXkFtZTcwMTY4NTYyMQ@@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/EL%20REY%20LEÓN%202.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>El Espanta Tiburones', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTMxMjY0NzE2M15BMl5BanBnXkFtZTcwNTc3ODcyMw@@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/ESPANTATIBURONES.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Ferdinand', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjI4Mjk0NzQwOF5BMl5BanBnXkFtZTgwNjg3MjI2MjI@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/FERDINAND.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Intensamente', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTk4ZDdmMjYtNzE4Zi00NjhjLThkY2ItYTc4NDY5MzQzNWRkXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/INTENSAMENTE.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Jorge El Curioso', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BNmJlNjIxMjItODliMC00MjYzLWEyMGItZTA2MGM2YjgxMDlmXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/JORGE%20EL%20CURIOSO.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Juego de Gemelas', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BNDhiZTA1YTgtNmZkMi00ZWY5LTg3MzEtOTk0YzkxNDJjMWQ0XkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/JUEGO%20DE%20GEMELAS.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Klara Y El ladrón de Manzanas', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BZmI0YTExNDItODVkOC00MjY2LTllMDEtYThlNzAzNDdkNGUyXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/KLARA%20LA%20VACA%20CUIDADORA%20DE%20MANZANAS.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>La Era de Hielo 1', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BZTQ4OWZlOWMtYmZlMS00ZjlmLTk4NzAtMGFlYmQxNjRmMDVkXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20ERA%20DE%20HIELO%201.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>La Era de Hielo 2 El Deshielo', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BZmFjNGE2NmYtYjA1Ni00N2QzLTk2MGYtZjBkZjNiNzc3NDhkXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20ERA%20DE%20HIELO%202.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>La Era de Hielo 3 El Origen de los Dinosaurios', 
		thumbnail: 'https://mx.web.img3.acsta.net/pictures/20/10/21/20/18/4455162.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20ERA%20DE%20HIELO%203.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>La Era de Hielo 4 La Formación de Continentes', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BYmFiMmU3NDctMWJmYy00YjM1LWJkNzItNzk3OGE5NTBmMzg4XkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20ERA%20DE%20HIELO%204%20LA%20DERIVA%20CONTINENTAL.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>La Era de Hielo 5 Choque de Mundos', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMDYyMGJhYmEtYzMzYi00YmJiLWFjMmItODMyMTRhNzg1OGNkXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20ERA%20DE%20HIELO%205.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>La Era de Hielo La Gran Busqueda de Pascua', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTBkOTUyNzUtYjU4OC00ZjU4LWExZmItZjNjYWFhYmRiNDAyXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20ERA%20DE%20HIELO%20LA%20GRAN%20BUSQUEDA%20DE%20PASCUA.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>La Era de Hielo Una Navidad Tamaño Mamut', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BYTljZmYwNTgtMzlkNC00NTBiLWE5NWEtODc5ZjMyZTUwNTNlXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20ERA%20DE%20HIELO%20UNA%20NAVIDAD%20TAMAÑO%20MAMUT.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>La Familia del Futuro', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BOTI0ZDkwYWUtNjQxOC00YTM1LTk3ODUtZDQ0YjhiYTI1ZDg1XkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20FAMILIA%20DEL%20FUTURO.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>El Ritmo de la Selva', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BODNhMWQ4ZTAtZDEzZi00YTdjLThkYzMtMTdhNzhkNWVkY2ZlXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20JUNGLA.mp4'
	  }
     ,{ title: 'Pelicula Infantil<br>La Vida Secreta de tus Mascotas',
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjIzMzA1OTkzNV5BMl5BanBnXkFtZTgwODE3MjM4NzE@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20VIDA%20SECRETA%20DE%20MIS%20MASCOTAS.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Lejos del Arbol', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BYTZlYjE0ODAtMGUwMy00N2EyLWFjZDUtODIzNDdmNWQ4ZWMyXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LEJOS%20DEL%20ARBOL.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Lluvia de Hamburguesas 1', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BOGZjZTcwYmYtMTI0Zi00ZmE3LThjMmItYmM4NWUzZDcyMDAyXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LLUVIA%20DE%20HAMBURGUESAS%201.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Lluvia de Hamburguesas 2', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMGNhY2NiZWYtYmI4Ny00Nzk0LWE5ZWMtODU2NDUyMGI4NTQ3XkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LLUVIA%20DE%20HAMBURGUESAS%202.mp4' 
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Locos por Las Nueces 1', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMGY5Yzk4OGYtY2QzNy00ZTA0LWJhMTYtODAzZDM5OGUyOTBhXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LOCOS%20POR%20LAS%20NUECES%201.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Locos por Las Nueces 2', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMDNhYzIxNGItZWIwMC00MzdmLWE0YTUtNzZmMzVmNGY4MGQyXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LOCOS%20POR%20LAS%20NUECES%202.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Los Croods 1', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTcyOTc2OTA1Ml5BMl5BanBnXkFtZTcwOTI1MjkzOQ@@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LOS%20CROODS%201.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Los Croods 2', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BYmEyMDcxMWYtNjE4MS00Yjc3LWI3NzYtYWI2YjAzYmVmOTZhXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LOS%20CROODS%202.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Los Increibles 1', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMmJlODRiYzktNTk5OC00YmY3LWEzODQtZmU3MzA5Mjg3YTQ1XkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LOS%20INCREIBLES%201.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Los Increibles 2', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LOS%20INCREIBLES%202.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Los Tipos Malos', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMWMxZGY3OTMtMmJhNy00YWM0LTg4Y2EtMDI2MDM5Mjk5NzgwXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LOS%20TIPOS%20MALOS.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Norman del Norte', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BNTFmNWNjZjAtNTE4Mi00YTZlLTk1NGMtMTUwY2EwYWI5NGYyXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/NORM%20DEL%20NORTE.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Ozzy Rapido y Peludo', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BZjkyNzlmNDctODBiMy00MDhmLTlmYTktZjI3MzZmNjYzODhmXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/OZZY%20RAPIDO%20Y%20PELUDO.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Pajaritos a Volar', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMDMyODMyMTQtMDdlZi00N2YyLWJiNzUtMTQwMzZjZThiNDBiXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/PAJARITOS%20A%20VOLAR.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Patos!', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMDBhNGQwN2UtZDI4NS00ZjFjLWE5NTEtOGRmYzVlNjUyNDMzXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/PATO%20PATO%20GANZO.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Ratatoiulle', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/RATATOIULLE.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Sammy 1 Y El Pasaje Secreto', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BYjk0MTkwZDEtYzQ0MC00MWU2LWFmOGEtZGU1MTZmNTE1YmI2XkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/SAMMY%20LA%20TORTUGA%201.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Sammy 2 El Gran Escape', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTU5Mjg0NTE5NF5BMl5BanBnXkFtZTgwMTk3NTAxMzE@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/SAMMY%20LA%20TORTUGA%202.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Tarzán II', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BYmM0MzQzY2ItM2UxOC00ZmMwLWIwNTYtNDc5MGEzYmNjYWU4XkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/TARZÁN%20COMO%20COMENZO%20TODO.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Timón y Pumba', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BZDA2MGU3MTgtYjhkNC00MWI4LWE2ZjAtY2NmZTRkMTM1YjQ2XkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/TIMON%20Y%20PUMBA.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>UP Una Aventura de Altura', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BNmI1ZTc5MWMtMDYyOS00ZDc2LTkzOTAtNjQ4NWIxNjYyNDgzXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/UP-%20UNA%20AVENTURA%20DE%20ALTURA.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Vacas Vaqueras', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BOTkzNDNmNDktNjAwOS00NmI5LWJkM2YtODYyMjE4ZTcwODQ2XkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/VACAS%20VAQUERAS.mp4'
	  }	  	  
     ,{ title: 'Pelicula Infantil<br>Zootopia', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMGNjNDRhOTctZjU2OS00ODBkLWFkZWEtMjI4ZWQ4MTllMTFiXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/ZOOTOPIA.mp4'
	  }
	 ,{ title: 'Pelicula Infantil<br>Shrek 1', 
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_.jpg', 
	    url: 'https://archive.org/download/shrek_202407/Shrek.mp4'
	  }
	 ,{ title: 'Pelicula Infantil<br>Shrek 2', 
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BMzNmNjQ1NmUtNzhiZS00YWE2LTg4N2ItZTA2ODdmOTMwOTQ1XkEyXkFqcGc@._V1_.jpg', 
	    url: 'https://archive.org/download/shrek_202407/Shrek%202.mp4'
	  }
	 ,{ title: 'Pelicula Infantil<br>Shrek 3', 
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BOWY0NGIwMTUtNGQ0NS00NjJiLTkxYTYtY2Y5YWZmODI4ZGRlXkEyXkFqcGc@._V1_.jpg', 
	    url: 'https://archive.org/download/shrek_202407/Shrek%20Tercero.mp4'
	  }
	 ,{ title: 'Pelicula Infantil<br>Shrek 4', 
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTY0OTU1NzkxMl5BMl5BanBnXkFtZTcwMzI2NDUzMw@@._V1_.jpg', 
	    url: 'https://archive.org/download/shrek_202407/Shrek%20Para%20Siempre.mp4'
	  }
	 ,{ title: 'Pelicula Infantil<br>Madagascar 1', 
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BYjk4OGFmZmYtYWE4NC00MzM4LTkwZTItODdhMjk3NTZjMmI5XkEyXkFqcGc@._V1_.jpg', 
	    url: 'https://archive.org/download/madagascar.-2005.-dvdrip.-latino.-xvi-d/Madagascar.2005.DVDRip.LATINO.XViD.mp4'
	  }	  
	 ,{ title: 'Pelicula Infantil<br>Madagascar 2', 
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjExMDA4NDcwMl5BMl5BanBnXkFtZTcwODAxNTQ3MQ@@._V1_.jpg', 
	    url: 'https://archive.org/download/madagascar.-2005.-dvdrip.-latino.-xvi-d/Madagascar.Escape.2.Africa.2008.DVDRip.LATINO.XViD.mp4'
	  }
	 ,{ title: 'Pelicula Infantil<br>Madagascar 3', 
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BOGE1N2U3N2EtYTE0My00YTYzLTkwZWYtMTI4YjhjZGU4YzZmXkEyXkFqcGc@._V1_.jpg', 
	    url: 'https://archive.org/download/madagascar.-2005.-dvdrip.-latino.-xvi-d/Madagascar.3.Europes.Most.Wanted.2012.DVDRip.LATINO.XViD.mp4'
	  }	  	  
	 ,{ title: 'Pelicula Infantil<br>Goofy La Pelicula', 
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzdlNGIwOGItMTA2Zi00MTQ3LTkxMTctYmNjZjZlMjQ5MjRjXkEyXkFqcGc@._V1_.jpg', 
	    url: 'https://archive.org/download/2074-goofy-la-pelicula-1995-d-s-spa-eng-v_20240418/2074-Goofy%20La%20Pelicula%20%281995%29%20D%20S%20spa%20eng%20v.mkv'
	  }	  
	 <!-- ********** DOCUMENTALES ****************************************************************************************************************** -->
	 ,{ title: 'Documental<br>El Niño, el topo, el zorro y el Caballo', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BZDg4MjI3NGMtOTcwMC00ZWQ0LWI0YjMtNDA0YmZjN2FlYzg2XkEyXkFqcGc@._V1_.jpg', 
		url: 'https://archive.org/download/el-nino-el-topo-el-zorro-y-el-caballo-1080p-dual-759.22-mb/El%20Ni%C3%B1o%2C%20El%20Topo%2C%20El%20Zorro%20y%20El%20Caballo%201080p%20DUAL%20759.22%20MB.mkv' 
	  }	  	  
  	 <!-- ********** MUSICALES    ****************************************************************************************************************** -->
     ,{ title: 'Musical<br>Michael Jacksons - Triller', 
		thumbnail: 'https://m.media-amazon.com/images/M/MV5BMDM1YzIyNTYtOGFiMS00YjJiLThiMTktMjllYzI4NjExOGNjXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://archive.org/download/thriller.40.2023.1080p/Thriller.40.2023.1080P.ia.mp4' 
	  }	
	 <!-- ********** STUDIO GHIBLI ***************************************************************************************************************** -->	  
	 ,{ title: 'Studio Ghibli<br>El Castillo en el Cielo',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BYmE0ZjEzMDgtNmJlOS00YjNhLTgyZTctNzExOTNhNjdjNzEzXkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/2.-el-castillo-en-el-cielo/2.%20El%20castillo%20en%20el%20cielo.mp4'
	  }	  
	 ,{ title: 'Studio Ghibli<br>La Tumba de las Luciernagas',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjdlOTNhMGItMDgxYy00OTYwLTkwMGYtNzAzMDRlNGEyODI1XkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/3.-la-tumba-de-las-luciernagas/3.%20La%20tumba%20de%20las%20luci%C3%A9rnagas.mp4'
	  }
	 ,{ title: 'Studio Ghibli<br>Mi Vecino Totoro',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BNzhjNTQ5N2UtZjAxMS00NDVlLTg2ZWMtMDAzZDY0NGEyYzU4XkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/4.-mi-vecino-totoro/4.%20Mi%20vecino%20totoro.ia.mp4'
	  }
	 ,{ title: 'Studio Ghibli<br>Recuerdos del Ayer',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BNmViYmU2MzItYTMyOS00OWJiLTg4NDMtNGE5MGI2ODZjYzkxXkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/6.-recuerdos-del-ayer/6.%20Recuerdos%20del%20ayer.mkv'
	  }
	 ,{ title: 'Studio Ghibli<br>Puedo escuchar el Mar',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BMzNhNTZkNjItNzUxYi00YzFhLWEzYmYtMTM5ZDViZTgzZTkwXkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/8.-puedo-escuchar-el-mar/8.%20Puedo%20escuchar%20el%20mar.mkv'
	  }
	 ,{ title: 'Studio Ghibli<br>Pompoko',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzI3ZjhjM2QtMTZjNi00OGUyLWI5YTItODFiOTFkNmJlMTY3XkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/9.-p-0mp-0k-0/9.%20P0mp0k0.mp4'
	  }
	 ,{ title: 'Studio Ghibli<br>Susurros del Corazón',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BYjVlMDBkOTgtNWU4Mi00ODMzLWJlZDctMWY5NjIyMDdlNzhiXkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/10.-susurros-del-corazon/10.%20Susurros%20del%20coraz%C3%B3n.mkv'
	  }
	 ,{ title: 'Studio Ghibli<br>La Princesa Mononoke',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BYjc1YjI2OGUtNzgyOC00ZmFiLThkNzgtYTRkNDQ5ZGEwM2I1XkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/11.-la-princ-3sa-m-0n-0n-0k-3/11.%20La%20princ3sa%20m0n0n0k3.mp4'
	  }
	 ,{ title: 'Studio Ghibli<br>Mis Vecinos los Yamada',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BZTA3Y2FjZDItZmZlOC00NGI0LWEwNTItNTE0ZTQ5NTJkZjJlXkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/12.-mis-vecinos-los-yamada/12.%20Mis%20vecinos%20los%20yamada.mkv'
	  }
	 ,{ title: 'Studio Ghibli<br>El Viaje de Chihiro',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BM2E2YzcwMTQtNWRlMC00ZGZlLWJhZTEtMDU4ZGIzMWI0NzJmXkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/13.-el-viaje-de-chihiro/El.Viaje.de.Chihiro.1080p.mp4'
	  }
	 ,{ title: 'Studio Ghibli<br>Haru en el Reino de los Gatos',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BY2NjZTY5NjgtNjIyZC00NDY5LWE2NmQtYjgxMjBlMWYwNDRjXkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/14.-haru-en-el-reino-de-los-gatos/14.%20Haru%20en%20el%20reino%20de%20los%20gatos.mp4'
	  }
	 ,{ title: 'Studio Ghibli<br>El Castillo Ambulante',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BNDRiZjJkYWEtOTdlYi00NjZiLWFkY2EtMGRjYThhYjNhYWU0XkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/15.-el-castillo-ambulante_202108/15.%20El%20Castillo%20Ambulante.mkv'
	  }
	 ,{ title: 'Studio Ghibli<br>Cuentos de Terramar',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BOTU4NmI0YzAtOTkwMy00ZGU1LTljZjAtYWU1MTMwNTVhZGVmXkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/16.-cuentos-de-terramar/16.%20Cuentos%20de%20terramar.mp4'
	  }
	 ,{ title: 'Studio Ghibli<br>PONYO',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BZTk0ZjhmMTItZTY4OS00MzM0LWI3YjQtYTIyMzIwN2UwYjQ0XkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/17.-ponyo/17.%20Ponyo.mp4'
	  }
	 ,{ title: 'Studio Ghibli<br>La Colina de las Amapolas',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BNzRmYzY2ODktZWM4NS00OTc5LWE5NGEtYWY3NTRmYzM4ZmE5XkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/19.-la-colina-de-las-amapolas/19.%20La%20colina%20de%20las%20amapolas.mp4'
	  }
	 ,{ title: 'Studio Ghibli<br>Se Levanta el Viento', 
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzdmOWJlNmUtYzE2MC00M2IzLTk2MTktNDFjOTA5ZDVkOGZmXkEyXkFqcGc@._V1_.jpg', 
		url: 'https://archive.org/download/20.-se-levanta-el-viento/20.%20Se%20levanta%20el%20viento.mp4' 
	  } 
	 ,{ title: 'Studio Ghibli<br>La Princesa Kaguya',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BN2IxN2ZmNzQtNjQ5Mi00OTFkLThmZWItM2FiMDlmOTE3YTc0XkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/21.-la-princesa-kaguya/21.%20La%20princesa%20kaguya.mp4'
	  }
	 ,{ title: 'Studio Ghibli<br>El Recuerdo de Marnie',
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BOTY1MDM5YWUtODVkMy00MGRkLTlkMTEtYTQyMTFhZmFjYmZiXkEyXkFqcGc@._V1_.jpg',
		url: 'https://archive.org/download/22.-el-recuerdo-de-marnie/22.%20El%20recuerdo%20de%20Marnie.mp4'
	  }
	 <!-- ********** PELICULAS SERIAS ***************************************************************************************************************** -->	  
	 ,{ title: 'Pelicula Seria<br>La Naranja Mecánica', 
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BYjFiN2E5N2ItZjc1Yy00MzZmLThmZGQtNGIyYjljMzk1NmU4XkEyXkFqcGc@._V1_.jpg', 
	    url: 'https://archive.org/download/la-naranja-mecanica.-latino/La%20naranja%20mec%C3%A1nica.%20Latino.mp4'
	  }
	 ,{ title: 'Pelicula Seria<br>Titanes del Pacifico 2', 
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BYjU2OWM0N2ItMWU3Zi00OTE3LWJlOTktNzE3YWNkMDBiOTlhXkEyXkFqcGc@._V1_.jpg', 
	    url: 'https://archive.org/download/titanes-del-pacifico_202107/Titanes%20del%20Pacifico.mkv'
	  }
	 ,{ title: 'Pelicula Seria<br>El Resplandor [25fps]', 
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BYmUxZDU3NjktMzA1OS00OGUwLWJkOTctYzhjOGI5MTcyY2U3XkEyXkFqcGc@._V1_.jpg', 
	    url: 'https://archive.org/download/el-resplandor-venta-1980-25fps-3000kps/El%20Resplandor%20%28Venta%201980%20-%2025fps%20-3000kps%29.mp4'
	  }	  
	 ,{ title: 'Pelicula Seria<br>El Increible Hulk', 
	    thumbnail: 'https://m.media-amazon.com/images/M/MV5BYmJkODY3ZDItNDk4Ny00OGFmLWE3OGQtYmEwMDRmMGQ3NmI2XkEyXkFqcGc@._V1_.jpg', 
	    url: 'https://archive.org/download/5-el-increible-hulk/5%20El%20Increible%20Hulk.mp4'
	  }	  
    ];		

    function loadGallery() {
      const gallery = document.getElementById('movieGallery');
      gallery.innerHTML = movies.map(movie => `
        <div class="movie-item" onclick="playMovie('${movie.url}')">
          <img src="${movie.thumbnail}" alt="${movie.title}" />
		  <p style="text-align:center;">${movie.title}</p>
        </div>
      `).join('');
    }

    function playMovie(url) {
      const videoPlayer = document.getElementById('videoPlayer');
      videoPlayer.src = url;
      videoPlayer.play();
    }

    window.onload = loadGallery;


	document.addEventListener("DOMContentLoaded", function () {
	  const sidebar = document.getElementById("sidebar");
	  const resizer = document.getElementById("resizer");
	  let isResizing = false;

	  resizer.addEventListener("mousedown", function (e) {
		isResizing = true;
		document.addEventListener("mousemove", resize);
		document.addEventListener("mouseup", stopResize);
	  });

	  function resize(e) {
		if (isResizing) {
		  let newWidth = e.clientX;
		  let maxWidth = window.innerWidth * 0.8; // Máximo 80% de la pantalla
		  let minWidth = 200; // Mínimo 200px
		  if (newWidth > minWidth && newWidth < maxWidth) {
			sidebar.style.width = newWidth + "px";
		  }
		}
	  }

	  function stopResize() {
		isResizing = false;
		document.removeEventListener("mousemove", resize);
		document.removeEventListener("mouseup", stopResize);
	  }
	});
