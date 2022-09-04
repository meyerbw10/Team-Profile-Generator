const generateHtml = employeeBucket => {  
  console.log(employeeBucket)

  const createManager = manager => {
    return (
    
      `<div class="card cardMain">
        <div class="card-body bg-light">
          <h5 class="card-title bg-danger text-white">${manager.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
          <p class="card-text bg-white">Employee ID: ${manager.id}</p>
          <p class="card-text bg-white"><a href="mailto:${manager.email}">${manager.email}</a></p>
          <p class="card-text bg-white">Office Number: ${manager.officeNumber}</p>
        </div>
      </div>`
  
  );};

  const createEngineer = engineer => {
      return (
        
        `<div class="card cardMain">
          <div class="card-body bg-light">
              <h5 class="card-title bg-primary text-white">${engineer.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
              <p class="card-text bg-white">Employee ID: ${engineer.id}</p>
              <p class="card-text bg-white"><a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <a href="https://github.com/${engineer.gitHub}" class="card-link bg-white">GitHub Profile</a>
          </div>
      </div>`

      );};


      
  const createIntern = intern => {
    return (
    
      `<div class="card cardMain">
        <div class="card-body bg-light">
          <h5 class="card-title bg-secondary text-white"><i class="bi bi-cup-hot-fill"></i>${intern.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
          <p class="card-text bg-white">Employee ID: ${intern.id}</p>
          <p class="card-text bg-white"><a href="mailto:${intern.email}">${intern.email}</a></p>
          <p class="card-text bg-white">School: ${intern.school}</p>
        </div>
    </div>`
  
  );};

  const html = [];

  html.push(employeeBucket
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => createManager(manager))
  );
  html.push(employeeBucket
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => createEngineer(engineer))
      .join("")
  );
  html.push(employeeBucket
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => createIntern(intern))
      .join("")
  );

  return html.join("")

}


module.exports = employeeBucket => {
 
return `
<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

      <link rel="stylesheet" href="./style.css">

      <title>Team Gen</title>
  </head>
  <body class="bg-light">
      <div class="jumbotron jumbotron-fluid bg-success">
          <div class="container">
              <h1 class="display-4 text-white">My Work Team</h1>
          </div>
      </div>
      <div class="container wrap">
          <div class="row">
              <div class="card-deck team-area col-12 d-flex justify-content-center bg-light">
                  ${generateHtml(employeeBucket)}
              </div>
          </div>
      </div>
  </body>
  </html>
`}