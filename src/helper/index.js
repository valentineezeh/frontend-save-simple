const frequency = [
    { id: 0, action: 'How often will you be saving' },
    { id: 1, action: 'Daily' },
    { id: 7, action: 'Weekly' },
    { id: 30, action: 'Monthly' },
  ];

const savingDaysFrequency = [
    { id: 0, action: 'Choose a day in the week to be debited' },
    { id: 1, action: 'Monday' },
    { id: 2, action: 'Tuesday' },
    { id: 3, action: 'Wednesday' },
    { id: 4, action: 'Thursday' },
    { id: 5, action: 'Friday' },
    { id: 6, action: 'Saturday' },
    { id: 7, action: 'Sunday' }
  ];

const FixedTargetSavingFundingSource = [
  {id: 0, action: 'Select from funding source.'},
  {id: 1, action: 'New Debit Card'},
  {id: 2, action: 'Existing Card'},
  {id: 5, action: 'Wallet'},
]

let list = [
  {id: 'Choose a date in the month to be debited'}
]

  for (var i = 1; i <= 30; i++)
  {
     list.push({id: `${i}`});
  }
  
const daysInMonth = list;

const groupSavingIntervals = [
  { id: 0, action: 'How often will you be saving' },
  { id: 1, action: 'Once a day' },
  { id: 7, action: 'Once a week' },
  { id: 30, action: 'Once a month' },
]

// Add commas to Money
export const addCommasToMoney = (x) => {
  var parts = x.toString().split(".");
  return parts[0].replace(/\B(?=(\d{3})+(?=$))/g, ",") + (parts[1] ? "." + parts[1] : "");
}


export {
    frequency,
    savingDaysFrequency,
    daysInMonth,
    groupSavingIntervals,
    FixedTargetSavingFundingSource,
  }