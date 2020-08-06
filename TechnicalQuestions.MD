1. Describe React props and state - how do they work, how are they different, when should we use each one.

   > React props are variables and used to pass data from parent component to its child components. it passed as, its only uni directional flow.

   ```JavaScript
      <ChildComponent name="David"> // Child component will receive props and can be accessed as props.name
   ```

> React state variables are initialized and managed by component. It can be initialized in class in constructor and updates using react setState() function.

> Both are holds parts of application state, but it designed to serve different purpose. Container components hold state and presentational components purely works on props.

2. What will cause the render() function of a React component to be executed.

   > On component state update, triggers render function execution.

   > When component receives props, this will also trigger render a function execution.

3. Will React or raw JS/HTML deliver better performance for a single page web application, and why.

   > As my experience, react will deliver better performance. since we all know that DOM operations(Create, Update), CSS paint and repainting are expensive.

   > Here react rescue us by maintaining virtual DOM, V-DOM is a object representation of actual DOM, it maintains old and new V-DOM and compares it in memory, if detects changes, reconciliation kicks off and updates actual DOM.

4) Describe the Observer pattern (in the context of UI development), what benefit it provides, how it is used, and a method of implementing in JS.

   > Observe pattern is object which maintains collections of observers and notifies them when there is state change occurs.

   > We often want solve problems like, on one action we wanted update many parts of application and it can be solved with help of Observe pattern.

   > We can see this pattern in many libraries like, redux connect method implements Observer pattern, behind the node event subscribe, publish and listen.

   <!-- Implementing in JavaScript -->

   ```JavaScript
      function Observer() {
        this.observers = [];
      }
      Observer.prototype.subscribe = function (fn) {
        this.observers.push(fn);
      };
      Observer.prototype.unsubscribe = function (fn) {
        this.observers = this.observers.filter((observer) => observer !== fn);
      };
      Observer.prototype.notify = function (data) {
        this.observers.forEach((observer) => observer(data));
      };

      // Observe pattern instance
      const ObserveObj = new Observer();

      // Subscribing for changes
      ObserveObj.subscribe((data)=> {
         console.log('On data changes', data); // it will logged { success: true}
      });

      // Notify changes
      ObserveObj.notify({success:"true"});

   ```

5. Explain an approach for adding zoom and pan interaction to the display of a large floor plan image in a web application.

   > We can implement in two ways, one CSS, JavaScript and canvas, JavaScript.

   > Using CSS - ZOOM -> onClick, we can achieve it on using css transform properties scale Using CSS - Pan -> onMouseMove, we can achieve it translate, scale and accessing mouse position

   > With canvas, no idea for now. But I can look at and can able to implement.
