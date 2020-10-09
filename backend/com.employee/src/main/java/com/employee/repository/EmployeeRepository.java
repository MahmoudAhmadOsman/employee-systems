package com.employee.repository;

import com.employee.modal.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;


//CRUD - Repository

public interface EmployeeRepository  extends JpaRepository<Employee, Long> {
}