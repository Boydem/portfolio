'use strict'

$(onInit)

function onInit() {
  renderProjs()
}

function renderProjs() {
  const projects = getProjsToDisplay()
  var strHTMLs = projects.map(proj =>
    `<div data-proj-id="${proj.id}" class="col-md-4 col-sm-6 portfolio-item">
        <div class="content-wrapper">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid rounded" src="img/portfolio/${proj.id}-tb.png" alt="">
          </a>
          <div class="portfolio-caption">
            <h5>${proj.name}</h5>
            <p class="text-muted">${proj.type}</p>
          </div>
        </div>
      </div>
    `
  )
  $('.projs-container').html(strHTMLs)
  $('.portfolio-item').on('click', renderProjForModal)
}
renderProjForModal()

function renderProjForModal() {
  const projects = getProjsToDisplay()
  var currProj = projects.find(proj => proj.id === this.dataset['projId'])
  var strHTML = `
                <!-- Project Details Go Here -->
                <h2>${currProj.name}</h2>
                <p class="item-intro">${currProj.title}</p>
                <a href="${currProj.url}" target="_blank">
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${currProj.id}.png" alt="">
                </a>
                <p>${currProj.desc}</p>
                <ul class="list-inline">
                  <li>Date: January 2022</li>
                  <li>Client: ${currProj.labels.join(', ')}</li>
                  <li>Category: Illustration</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
  `
  $('.modal-body').html(strHTML)
}