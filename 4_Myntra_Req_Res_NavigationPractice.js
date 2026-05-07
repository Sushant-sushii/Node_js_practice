const http=require('http')
const server=http.createServer(function(req,res){
    console.log(req.url,req.method,req.headers);
    if(req.url.toLowerCase()==="/women"){
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><body><h1>Welcome to Myntra Womens Section</h1><h2>Discover the latest fashion trends for women. Shop now and enjoy exclusive deals on clothing, footwear, accessories, and more!</h2></body></html>');
      
    }
    else if(req.url.toLowerCase()==="/")
    {
        res.setHeader('Content-Type','text/html');
        res.write(`<!DOCTYPE html>
        <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <style>
        /* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #1a1a1a;
}

/* Navigation Bar Styles */
.navbar {
    background-color: #2a2a2a;
    box-shadow: 0 2px 4px rgba(255, 107, 107, 0.2);
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
}

.nav-logo {
    flex-shrink: 0;
}

.logo-link {
    font-size: 24px;
    font-weight: bold;
    color: #ff6b6b;
    text-decoration: none;
    letter-spacing: 2px;
}

.logo-link:hover {
    color: #ff5252;
}

/* Navigation Menu */
.nav-menu {
    display: flex;
    list-style: none;
    gap: 0;
}

.nav-item {
    margin: 0;
}

.nav-link {
    display: block;
    padding: 10px 20px;
    color: #e0e0e0;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.nav-link:hover {
    color: #ff6b6b;
    background-color: #1a1a1a;
}

.nav-link-cart {
    border: 2px solid #ff6b6b;
    color: #ff6b6b;
    border-radius: 4px;
}

.nav-link-cart:hover {
    background-color: #ff6b6b;
    color: #2a2a2a;
}

/* Main Content */
.main-content {
    max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
    background-color: #2a2a2a;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(255, 107, 107, 0.1);
}

.main-content h1 {
    color: #e0e0e0;
    text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-container {
        flex-direction: column;
        gap: 15px;
    }

    .nav-menu {
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }

    .nav-link {
        padding: 8px 15px;
        font-size: 12px;
    }
}

        </style>
        </head>
        <body>
         <!-- Navigation Bar -->
         <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="/" class="logo-link">MYNTRA</a>
            </div>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="/" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="/men" class="nav-link">Men</a>
                </li>
                <li class="nav-item">
                    <a href="/women" class="nav-link">Women</a>
                </li>
                <li class="nav-item">
                    <a href="/kids" class="nav-link">Kids</a>
                </li>
                <li class="nav-item">
                    <a href="/cart" class="nav-link nav-link-cart">Cart</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
        <h1>Welcome to Myntra Clone</h1>
    </main>  
</body>
</html>`);
  return res.end();
    }
    else if(req.url.toLowerCase()==="/men"){
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><body><h1>Welcome to Myntra Mens Section</h1><h2>Discover the latest fashion trends for men. Shop now and enjoy exclusive deals on clothing, footwear, accessories, and more!</h2></body></html>');
      
    }
    else if(req.url.toLowerCase()==="/kids"){
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><body><h1>Welcome to Myntra Kids Section</h1><h2>Discover the latest fashion trends for kids. Shop now and enjoy exclusive deals on clothing, footwear, accessories, and more!</h2></body></html>');
       
    }
    else if(req.url.toLowerCase()==="/carts"){
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><body><h1>Welcome to Myntra Cart Section</h1><h2>Review your selected items and proceed to checkout. Enjoy a seamless shopping experience with exclusive deals and discounts!</h2></body></html>');
        
    }
    else
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><body><h1>Welcome to Myntra</h1><h2>Explore the latest fashion trends for women, men, and kids. Shop now and enjoy exclusive deals on clothing, footwear, accessories, and more!</h2><p>Error 404: Page Not Found</p></body></html>');
       
    }
     res.end();
})
const PORT=3000
server.listen(PORT,()=>
    {
    console.log(`server running at http://localhost:${PORT}`);
    
});