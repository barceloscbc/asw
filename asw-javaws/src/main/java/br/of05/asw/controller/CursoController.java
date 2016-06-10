package br.of05.asw.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.of05.asw.entity.User;
import br.of05.asw.model.Curso;
import br.of05.asw.repository.UserDao;

@RestController
public class CursoController {

	@Autowired private UserDao userRepository;
	
	private Map<Integer, Curso> cursos;

	public CursoController() {
		cursos = new HashMap<Integer, Curso>();

		Curso c1 = new Curso(1, "Workshop Rest", "24hs");
		Curso c2 = new Curso(2, "Workshop Spring MVC", "24hs");
		Curso c3 = new Curso(3, "Desenvolvimento Web com JSF 2", "60hs");

		cursos.put(1, c1);
		cursos.put(2, c2);
		cursos.put(3, c3);
	}

	@RequestMapping(value = "/cursos", method = RequestMethod.GET)
	public ResponseEntity<List<Curso>> listar() {

		User usuario = new User();
		usuario.setName("Igor");
		usuario.setEmail("igortdc@hotmail.com");
		userRepository.save(usuario);
		
		
		return new ResponseEntity<List<Curso>>(new ArrayList<Curso>(cursos.values()), HttpStatus.OK);
	}

}