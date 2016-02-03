# Render a list of images with for loops

- A designer you work with has created a beautfiul new look for your companies blog! You'll need to:

1. Create a for loop to append the provided data
2. Style each post according to the mockup

The page should look like [this](img/reference/Mockup.png)

## Some helpful snippets
`for` loop
```javascript
// For Loop
for(var i = 0; i < 10; i++) {
    console.log(i);
}
```

Accessing properties on an array
```javascript
var list = ["Clinton", "Grace", "Tashay"];
list[0] // = "Clinton"

var nestedList = [
    ["eggs", "bacon"],
    ["toast", "jam"],
];
nestedList[0][1] // = "bacon"
nestedList[1] // = ["toast", "jam"]
```

Finding elements with Jquery ($)
```javascript
// Typically you'd assign this to a variable
var list = $('list');
```

Appending elements with Jquery ($)
```javascript
// Typically you'd assign this to a variable
var myItem = '<div class="item">Item</div>';
var list = $('list');

list.append(myItem);
```


## Some helpful tips
Break the problem down what do you know how to do? 

Have fun!