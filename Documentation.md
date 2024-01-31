# First Slice API Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Endpoint Registration](#endpoint-registration)
3. [Order Processing](#order-processing)
   - [Telephone Orders](#telephone-orders)
   - [Delivery Orders (Cash Payment)](#delivery-orders-cash-payment)
   - [VAT Reporting](#vat-reporting)
   - [Distance Surcharge](#distance-surcharge)
   - [Token Validation (Online Payment)](#token-validation-online-payment)
4. [Points System](#points-system)
5. [Order Distribution](#order-distribution)
6. [Game Dynamics](#game-dynamics)

## 1. Introduction
The First Slice API allows registered companies to integrate with the order platform for processing various order types. This documentation outlines the endpoints, request and response formats, and the scoring system for the game.

## 2. Endpoint Registration
Companies must register their endpoints through a UI to start receiving orders. The endpoint should accept orders in JSON format and return a valid HTTP 200 response for successful registrations.

- **Endpoint:** `/register`
- **Method:** `POST`
- **Request:**
```
{
   "companyName": "YourCompany",
   "endpoint": "https://your-company-api.com/orders"
}
```

- **Response:**
```
{
   "status": "success",
   "message": "Endpoint registered successfully"
}
```

## 3. Order Processing

### Telephone Orders
Process telephone orders and earn points for successful processing.

- **Order Type:** `telephone`
- **Request:**
```
{
   "orderType": "telephone"
}
```

- **Response:**
```
{
   "number": "07921111111"
}
```


### Delivery Orders (Cash Payment)
Process delivery orders with cash payment, calculate order total, and earn points.

- **Order Type:** `delivery`
- **Request:**
```
{
   "orderType": "delivery",
   "payment": "cash",
   "paymentToken": "string",
   "items": [
      {
         "name": "ItemName",
         "cost": 10,
         "quantity": 2
      }
   ],
   "delivery": {
      "distance": 5,
      "feePerMile": 0.6,
      "deliveryItemMultiplier": 0.1
   }
}
```

- **Response:**
```
{
   "orderTotal": 12,
   "driver": "DriverName"
}
```


### VAT Reporting
Report VAT for orders with items and delivery.

- **Order Type:** `delivery`
- **Request:**
```
{
    "orderType": "delivery",
    "payment": "online",
    "items": [
        {
        "name": "ItemName",
        "cost": 10,
        "quantity": 2
        }
    ],
    "delivery": {
        "distance": 5,
        "feePerMile": 0.6,
        "deliveryItemMultiplier": 0.1
    }
}
```

- **Response:**
```
{
   "orderTotal": 12,
   "driver": "DriverName",
   "vat": 1.2
}
```


### Distance Surcharge
Charge a surcharge for distances beyond 5 miles.

- **Order Type:** `delivery`
- **Request:**
```
{
    "orderType": "delivery",
    "payment": "cash",
    "items": [
        {
            "name": "ItemName",
            "cost": 10,
            "quantity": 2
        }
    ],
    "delivery": {
        "distance": 7,
        "feePerMile": 0.6,
        "deliveryItemMultiplier": 0.1
    }
}
```

- **Response:**
```
{
    "orderTotal": 14,
    "driver": "DriverName",
    "deliverySurcharge": 2,
    "vat": 1.4
}
```


### Token Validation (Online Payment)
Validate payment tokens for online payments and earn points.

- **Request from First-Slice:**
```
{
    "orderType": "delivery",
    "payment": "online",
    "items": [
        {
            "name": "ItemName",
            "cost": 10,
            "quantity": 2
        }
    ],
    "delivery": {
        "distance": 5,
        "feePerMile": 0.6,
        "deliveryItemMultiplier": 0.1
    }
}
```

- **Response to First-Slice:**
```
{
    "orderTotal": 12,
    "driver": "DriverName",
    "deliverySurcharge": 1,
    "vat": 1.2
}
```


- **Token Validation Request to First-Slice:**
```
{
    "paymentToken": "string"
}
```

- **Token Validation Response from First-Slice:**
```
{
    "status": "settled"
}
```


## 4. Points System
- 1 point for a successful 200 response.
- Additional points for specific actions as outlined in each order type.

## 5. Order Distribution
- First Slice distributes a fixed number of orders equally, asynchronously, to all registered companies every minute.
- All teams receive identical orders to ensure equal opportunity for points.

## 6. Game Dynamics
- Levels represent different phases in the development process.
- Challenges, time-based rounds, and bonus points for creativity.
- Simulated market trends affecting the fictional company.
- Encourage efficient delivery to accumulate points early and often.
