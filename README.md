# Week-4-
Ecommerce Cookie Shop
    OBJECTS WE NEED
    Product
        ID
        Stock (quantity)
        Title (name of product)
        Price
        Description
        Tags
        Connect to the back-end system
        f(x) add to shopping cart and quantity
        Items will be added to the array of products in shopping cart
    Shopping Cart
        An array of products
        ID
        Qty
        Price
        Item total
        Del item
        Calculate total
        Check out
        Change Quantity
    Invoice
        Items (is an array [ ])
        Inventory ID
        Price
        Quantity
        Total Price (number)
        Date
        Billing address (include into the user’s account info )
        Shipping address (include into the user’s account info )
        Which account is it connected to
        ID (order number)
        Paid (yes/no)
        Connected to inventory
    Payment System
      Connected to invoice
    Accounts
        Name
        ID
        Password
        Role
        Administrator
        Customer
        Date Created
        Email
        Payment info
        More abstract, how do we pay for it ? Alli pay? Wechat pay? Paypall?
        This is also an object { }
        History
        Series of invoices [ ]
        Addresses
    Address:
        Street
        City
        Zipcode
        How do we validate this, using the country related
        Country
        Account holder
        Type = billing or shipping
