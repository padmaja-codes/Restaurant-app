Developing a restaurant page, ensuring it is user-friendly and visually appealing.

#### Mobile Interface

<a href="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688464567/Restaurant_page_movie-view_dqv1fl.png" target=_blank_>
    <div style="text-align: center;">
        <img src="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688465518/Restaurant_page_movie-view_2_p6r4up.png" alt="restaurant-app" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
    </div>
</a>

<br/>
#### Web Interface
<a href="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688464566/Restaurant_page_web-view_l7snar.png" target=_blank_ >
    <div style="text-align: center;">
        <img src="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688464566/Restaurant_page_web-view_l7snar.png" alt="restaurant-app" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
    </div>
</a>

## API

https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details

## Features

### Menu & Dishes

* Fetches restaurant menu data from the provided API.
* Displays dish categories dynamically based on API response.
* Category tabs are horizontally scrollable.
* Displays all dishes under their respective categories.
* Shows "Customizations Available" when a dish contains add-ons.

### Authentication

* Login functionality with username and password validation.
* Authentication maintained using Cookies (js-cookie).
* Protected routes for Home and Cart pages.
* Unauthenticated users are redirected to the Login page.
* Authenticated users can access Home and Cart routes directly.
* Logout functionality with session removal.

### Cart Management

* Add dishes to the cart using the "ADD TO CART" button.
* Cart count updates automatically when new dishes are added.
* Adding the same dish multiple times increases its quantity instead of creating duplicate entries.
* Real-time cart synchronization across Home and Cart pages using React Context API.
* Increase or decrease dish quantity directly from the cart.
* Automatically removes a dish when its quantity reaches zero.
* Remove individual cart items.
* Remove all items from the cart with a single click.
* Displays an Empty Cart state when no items are available.

### State Management

* Implemented React Context API for global cart state management.
* Maintains synchronization between Home and Cart routes.
* Eliminates prop drilling by providing a centralized state management solution.

### User Experience

* Responsive and clean user interface.
* Dynamic cart item count displayed in the header.
* Seamless navigation between Login, Home, and Cart pages.
* Real-time price updates based on item quantity.

