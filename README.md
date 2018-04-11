# ngx-slim-dropdown

Simple dropdown for your angular5 applications. Does not depend of jquery.
Simply create proper css classes.
eg:
```css
.open .dropdown {
    display: block;
}
```
Please star a project if you liked it, or create an issue if you have problems with it.

## Installation

1. Install npm module:
    
    `npm install ngx-slim-dropdown --save`

2. If you are using system.js you may want to add this into `map` and `package` config:
    
    ```json
    {
        "map": {
            "ngx-dropdown": "node_modules/ngx-slim-dropdown"
        },
        "packages": {
            "ngx-dropdown": { "main": "index.js", "defaultExtension": "js" }
        }
    }
    ```

## Usage

```html
<div class="dropdown" appDropdown [dropdownToggle]="false" (onOpen)="doSomeActionOnOpen()" (onClose)="doSomeActionOnClose()">
    <button class="btn btn-primary" appDropdownOpen>My Heroes</button>
    <ul class="dropdown-menu">
        <li><a>Badman</a></li>
        <li><a>Sadman</a></li>
        <li><a>Lieman</a></li>
    </ul>
</div>
```

* `appDropdown` directive is used to specify where your dropdown starts
    * `dropdownToggle` Indicates if dropdown should be closed when user double-clicks the dropdown opening button. Default is **true**.
    * `(onOpen)` in dropdown is called when dropdown is opened
    * `(onClose)` in dropdown is called when dropdown is closed
* `appDropdownOpen` is used on `a`, `button` or any other clickable element to open a dropdown on its click
* `appDropdownNotClosableZone` (not used in the example above, however is used in the examples below) is used
    to prevent closing dropdown when you click on its elements. Its highly usable when you want to create
    interactive dropdowns.

## Sample

```typescript
import {Component} from "@angular/core";
import {DropdownModule} from "ngx-slim-dropdown";

@Component({
    selector: "app",
    template: `
<div class="container">

    <!-- a-style dropdown -->
    <div class="dropdown" appDropdown>
        <a appDropdownOpen>My Heroes</a>
        <ul class="dropdown-menu">
            <li><a href="#">Badman</a></li>
            <li><a href="#">Sadman</a></li>
            <li><a href="#">Lieman</a></li>
        </ul>
    </div>
    <br/>

    <!-- button dropdown -->
    <div class="dropdown" appDropdown>
        <button class="btn btn-primary" appDropdownOpen>My Heroes</button>
        <ul class="dropdown-menu">
            <li><a href="#">Badman</a></li>
            <li><a href="#">Sadman</a></li>
            <li><a href="#">Lieman</a></li>
        </ul>
    </div>
    <br/>

    <!-- dropdown with items that are not closing dropdown when you click on them -->
    <div class="dropdown" appDropdown>
        <button class="btn btn-primary" appDropdownOpen>Not closable on items click</button>
        <ul class="dropdown-menu" appDropdownNotClosableZone>
            <li><a href="#">This dropdown will</a></li>
            <li><a href="#">not be closed when you</a></li>
            <li><a href="#">select any its items</a></li>
            <li><a href="#">this allows you to put</a></li>
            <li><a href="#">dynamic content into it</a></li>
        </ul>
    </div>

</div>
`
})
export class AppComponent {

}

@NgModule({
    imports: [
        BrowserModule,
        DropdownModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);
```

Take a look on samples in [./sample](https://github.com/kexxxfeng/ngx-dropdown/tree/master/src/app) for more examples of
usages.
