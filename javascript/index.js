// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  document.querySelector
  ("#mashedPotatoesImg").removeAttribute("hidden");
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          getInstruction("mashedPotatoes", 5, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));


// Iteration 2 - using promises
obtainInstruction(0)
  .then((instruction) => {
    displayInstruction(instruction); // Display step 0
    return obtainInstruction(1); // Return the next Promise for step 1
  })
  .then((instruction) => {
    displayInstruction(instruction); // Display step 1
    return obtainInstruction(2); // Return the next Promise for step 2
  })
  .then((instruction) => {
    displayInstruction(instruction); // Display step 2
    return obtainInstruction(3); // Return the next Promise for step 3
  })
  .then((instruction) => {
    displayInstruction(instruction); // Display step 3
    return obtainInstruction(4); // Return the next Promise for step 4
  })
  .then((instruction) => {
    displayInstruction(instruction); // Display step 4
    return obtainInstruction(5); // Return the next Promise for step 5
  })
  .then((instruction) => {
    displayInstruction(instruction); // Display step 5
    return obtainInstruction(6); // Return the next Promise for step 6
  })
  .then((instruction) => {
    displayInstruction(instruction); // Display step 6
    return obtainInstruction(7); // Return the next Promise for step 7
  })
  .then((instruction) => {
    displayInstruction(instruction); // Display step 7
    displayInstruction("Stake is ready!"); // Add final message
  })
  .catch((err) => {
    console.error("Error:", err); // Handle any errors in the chain
  });
// Iteration 3 using async/await
function obtainInstruction(step) {
  return new Promise((resolve, reject) => {
    if (!broccoli[step]) {
      reject("Instruction step does not exist!");
    } else {
      resolve(broccoli[step]);
    }
  });
}

async function makeBroccoli() {
  try {
    // Element to display instructions on the page
    const instructionsList = document.getElementById("broccoli-instructions");

    // Helper function to add a step to the DOM
    const displayInstruction = (instruction) => {
      const listItem = document.createElement("li");
      listItem.textContent = instruction;
      instructionsList.appendChild(listItem);
    };

    // Sequentially await each instruction step
    const step0 = await obtainInstruction(0);
    displayInstruction(step0); // wash broccoli

    const step1 = await obtainInstruction(1);
    displayInstruction(step1); // cut broccoli

    const step2 = await obtainInstruction(2);
    displayInstruction(step2); // boil water

    const step3 = await obtainInstruction(3);
    displayInstruction(step3); // add broccoli to boiling water

    const step4 = await obtainInstruction(4);
    displayInstruction(step4); // let it cook for 5 minutes

    const step5 = await obtainInstruction(5);
    displayInstruction(step5); // drain water

    const step6 = await obtainInstruction(6);
    displayInstruction(step6); // season broccoli with salt and pepper

    // Add final step
    displayInstruction("Broccoli is ready!");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the makeBroccoli function
makeBroccoli();

// Bonus 2 - Promise all
// ...