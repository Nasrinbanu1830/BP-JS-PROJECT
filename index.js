//parent element to store cards
const taskContainer = document.querySelector(".task__container");


//Global store
const globalStore =[];

console.log(taskContainer);
const newCard = ({id,imageUrl,taskTitle,taskDescription,taskType}) => `<div class="col-md-6 col-lg-4" id=${id}>
<div class="card">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
    <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>

  </div>
  <img src=${imageUrl}
  class="card-img-top rounded" alt="image">
  <div class="card-body">
    <h5 class="card-title">${taskTitle}</h5>
    <p class="card-text">${taskDescription}</p>
    <span class="badge bg-primary">${taskType}</span>
  </div>
  <div class="card-footer text-muted">
    <button type="button" id=${id} class="btn btn-outline-primary float-end">Open Task</button>

  </div>
</div>
</div>`;
const loadInitialTaskCards = () => {
 
  // access localStorage
  const getInitialData = localStorage.getItem("tasky");
  if(!getInitialData) return;

  // convert stringified-object to object(normal)
 const { cards } = JSON.parse(getInitialData);
 cards.map((card) => {
   const createNewCard= newCard(card);
  taskContainer.insertAdjacentHTML("beforeend",createNewCard);
  globalStore.push(card);

 });

 //map around the array to generate HTML Card and inject it to DOM


}



const saveChanges = () => {
    const taskData = {
        id:`${Date.now()}`,  //unique number for card id number  
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskDescription: document.getElementById("taskdescription").value,
        taskType: document.getElementById("tasktype").value,

    };
    const createNewCard = newCard(taskData);
    taskContainer.insertAdjacentHTML("beforeend",createNewCard);
      globalStore.push(taskData);
    


      localStorage.setItem("tasky", JSON.stringify({cards:globalStore}));
  };