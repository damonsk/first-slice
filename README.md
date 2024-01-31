# First Slice - Order Platform Integration Game

## Game Objective
Demonstrate the agility of story slicing and incremental delivery by implementing an order processing system for a fictional company.

This is a gamified version of the Elephant Carpaccio exercise, with unashamedly time pressure and the need for more software development. However, the principles remain the same: early and often release of value.

## General Requirements
- Integration with the First-Slice order platform.
- Endpoint registration through a UI.
- Accept orders in JSON format.
- Return a valid HTTP 200 response for successful orders.

## Order Types

### 1. Telephone Orders
- Process telephone orders.
- Earn 1 point for successfully processing a telephone order.

### 2. Delivery Orders (Cash Payment)
- Return a calculated order total.
- Earn 1 point for accepting the order.
- Earn 1 additional point for a valid calculated total.
- Earn 1 additional point for providing a driver name.

### 3. VAT Reporting
- Report VAT for orders with items and delivery.
- Earn 1 additional point for valid VAT reporting.

### 4. Distance Surcharge
- Charge £2 per mile for distances beyond 5 miles.
- Earn 1 additional point for providing the correct surcharge value.

### 5. Token Validation (Online Payment)
- Validate payment tokens for online payments.
- Earn 2 additional points per validated token.

## Points System
- 1 point for a successful 200 response.
- Additional points for specific actions as outlined in each order type.

## Order Distribution
- First Slice distributes a fixed number of orders equally, asynchronously, to all registered companies every minute.
- All teams receive identical orders to ensure equal opportunity for points.

## Game Dynamics
- Levels represent different phases in the development process.
- Challenges, time-based rounds, and bonus points for creativity.
- Simulated market trends affecting the fictional company.
- Encourage efficient delivery to accumulate points early and often.
