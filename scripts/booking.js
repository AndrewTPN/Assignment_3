/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let daily_rate = 0
let number_of_selected_days = 0
let day_button_array = Array.from(document.getElementsByClassName("blue-hover"))
let clear_button = document.getElementById("clear-button")
let total_cost = 0
let half_day_button = document.getElementById("half")
let full_day_button = document.getElementById("full")
let calculate_cost = document.getElementById("calculated-cost")
let monday = document.getElementById("monday")
let tuesday = document.getElementById("tuesday")
let wednesday = document.getElementById("wednesday")
let thursday = document.getElementById("thursday")
let friday = document.getElementById("friday")


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
monday.addEventListener("click", function(e) {
  if(!monday.classList.contains("clicked")) {
      number_of_selected_days += 1
      console.log(number_of_selected_days)
      monday.classList.add("clicked")
      if(half_day_button.classList.contains("clicked")) {
          daily_rate = 20
          total_cost = number_of_selected_days * daily_rate
          calculate_cost.innerHTML = total_cost
      }

      if(full_day_button.classList.contains("clicked")) {
          daily_rate = 35
          total_cost = number_of_selected_days * daily_rate
          calculate_cost.innerHTML = total_cost
      }
  }
})


tuesday.addEventListener("click", function(e) {
  if(!tuesday.classList.contains("clicked")) {
      number_of_selected_days += 1
      tuesday.classList.add("clicked")
      if(half_day_button.classList.contains("clicked")) {
          daily_rate = 20
          total_cost = number_of_selected_days * daily_rate
          calculate_cost.innerHTML = total_cost
      }

      if(full_day_button.classList.contains("clicked")) {
          daily_rate = 35
          total_cost = number_of_selected_days * daily_rate
          calculate_cost.innerHTML = total_cost
      }
  }
})


wednesday.addEventListener("click", function(e) {
  if(!wednesday.classList.contains("clicked")) {
      number_of_selected_days += 1
      wednesday.classList.add("clicked")
      if(half_day_button.classList.contains("clicked")) {
          daily_rate = 20
          total_cost = number_of_selected_days * daily_rate
          calculate_cost.innerHTML = total_cost
      }

      if(full_day_button.classList.contains("clicked")) {
          daily_rate = 35
          total_cost = number_of_selected_days * daily_rate
          calculate_cost.innerHTML = total_cost
      }
  }
})


thursday.addEventListener("click", function(e) {
  if(!thursday.classList.contains("clicked")) {
      number_of_selected_days += 1
      thursday.classList.add("clicked")
      if(half_day_button.classList.contains("clicked")) {
          daily_rate = 20
          total_cost = number_of_selected_days * daily_rate
          calculate_cost.innerHTML = total_cost
      }

      if(full_day_button.classList.contains("clicked")) {
          daily_rate = 35
          total_cost = number_of_selected_days * daily_rate
          calculate_cost.innerHTML = total_cost
      }
  }
})

friday.addEventListener("click", function(e) {
  if(!friday.classList.contains("clicked")) {
      number_of_selected_days += 1
      friday.classList.add("clicked")
      if(half_day_button.classList.contains("clicked")) {
          daily_rate = 20
          total_cost = number_of_selected_days * daily_rate
          calculate_cost.innerHTML = total_cost
      }

      if(full_day_button.classList.contains("clicked")) {
          daily_rate = 35
          total_cost = number_of_selected_days * daily_rate
          calculate_cost.innerHTML = total_cost
      }
  }
})


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clear_button.addEventListener("click", function() {
  monday.classList.remove("clicked")
  tuesday.classList.remove("clicked")
  wednesday.classList.remove("clicked")
  thursday.classList.remove("clicked")
  friday.classList.remove("clicked")
number_of_selected_days = 0
total_cost = 0
calculate_cost.innerHTML = total_cost
})




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half_day_button.addEventListener("click", function() {
  daily_rate = 20
  half_day_button.classList.add("clicked")
  full_day_button.classList.remove("clicked")

  total_cost = daily_rate * number_of_selected_days
  calculate_cost.innerHTML = total_cost
  
})


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


full_day_button.addEventListener("click", function() {
  daily_rate = 35
  half_day_button.classList.remove("clicked")
  full_day_button.classList.add("clicked")

  total_cost = daily_rate * number_of_selected_days
  calculate_cost.innerHTML = total_cost
})


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


