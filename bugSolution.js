```javascript
// Solution: Using responsive container classes and CSS overrides
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="container mx-auto">
    <h1>This is a container</h1>
  </div>
</div>

/* CSS Overrides (if necessary) */
@media (min-width: 640px) {
  .container {
    max-width: 100%; /* Adjust max-width as needed */
  }
}
```