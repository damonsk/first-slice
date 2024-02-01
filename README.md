# First Slice - A Gamified Story Slicing Kata

## Kata Objective
Demonstrate the agility of story slicing and incremental delivery by implementing an order processing system for a fictional company.

This is largely based upon Alistair Cockburn's Elephant Carpaccio exercise, tweaked with a different scenario, the need for more software development, and ideally using modern cloud architecture (but not nessessary). The principle remains the same: a focus on early and often release of value.

## General Requirements
- Integration with the First-Slice order platform.
- Endpoint registration through a UI.
- Accept orders in JSON format.
- Return a valid JSON response for successful orders.

## Full Implementation
1. Process telephone orders.
2. Process cash delivery orders.
3. Process online payment delivery orders.
4. VAT reporting.
5. Correct order total calculations.
5. Additional per mile delivery charge for orders exceeding 5 miles.
6. Inform delivery customers of driver name.
7. Validate payment tokens.

## Points System
- As this is gamified, in the background, teams will earn points for correclty implementing requirements outlined above.

## Order Distribution
- First Slice distributes a fixed number of orders equally, asynchronously, to all registered companies every minute.  
- If there are 2 teams registered, they will get 50/50% share of all total orders, with the percentage decreasing with more registered teams.
- All teams receive identical orders to ensure equal opportunity for points.

## Where is the "value"?
- Few companies have integrated with First Slice (but that's quickly changing), the lack of competiton manifests with more orders.
- Customers value knowing who their delivery driver is.
- Your owner doesn't like doing the manual VAT reporting they do each day in their flaky spreadsheet.
- Orders are split, 
  - 20% are telephone orders. 
  - 80% are delivery, of which are split 50/50 between cash and online payment.
- Delivery drivers need to be incentivised to deliver beyond 5 miles, and they appreciate the additional charge per mile to help with fuel costs. 

