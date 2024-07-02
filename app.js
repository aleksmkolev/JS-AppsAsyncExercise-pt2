function solve() {
  const BASE_URL = "http://localhost:3030/jsonstore/bus/schedule/";

  const infoRef = document.getElementById("info");
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");

  let [nextId, location] = ["depot", null];
  

  async function depart() {
    const response = await fetch(BASE_URL + nextId);
    const data = await response.json();

    location = data.name;
    nextId = data.next;

    infoRef.textContent = `Next stop ${location}`;

    departBtn.disabled = true;
    arriveBtn.disabled = false;
  }

  async function arrive() {
    infoRef.textContent = `Arriving at ${location}`;
    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
