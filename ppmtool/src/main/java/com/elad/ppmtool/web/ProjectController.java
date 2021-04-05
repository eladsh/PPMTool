package com.elad.ppmtool.web;

import com.elad.ppmtool.domain.Project;
import com.elad.ppmtool.services.MapValidationErrorsService;
import com.elad.ppmtool.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

import javax.validation.Valid;



@RestController
@RequestMapping("/api/project")
@CrossOrigin
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private MapValidationErrorsService mapValidationErrorsService;

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result) {
        ResponseEntity<?> errorMam = mapValidationErrorsService.mapValidationErrors(result);
        if (errorMam != null) return errorMam;
        Project project1 = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<Project>(project1, HttpStatus.CREATED);
    }

   @GetMapping("/{projectId}")
   public ResponseEntity<?> getProjectById(@PathVariable  String projectId){
        Project project = projectService.findProjectByIdentifier(projectId);
        return new ResponseEntity<Project>(project, HttpStatus.OK);
   }

   @GetMapping("/all")
    public Iterable<Project> getAllProjects(){
        return projectService.findAllProject();
   }

   @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteProjectByIdentifier(@PathVariable String projectId){
        projectService.deleteProjectByIdentifier(projectId);
        return new ResponseEntity<String>("Project with ID '" + projectId + "' was deleted successfully", HttpStatus.OK );
   }

}
