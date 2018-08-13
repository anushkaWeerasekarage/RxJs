import { Observable } from "rxjs/Observable";

/*
var observable = Observable.create(function subscribe(observer: any){
    observer.next('hello');
});
*/

    var observable = Observable.create((observer: any) => {
        /*
        try {
            observer.next('hello');
            observer.next('world');

            setInterval(() => {
                observer.next('how are you');
            }, 2000);

        }
        catch(err) {
            console.log(err);
        }
        */
    }).share();

//subscription1
    var observer = observable.subscribe((x: any) => addItem(x),
            (error: any) => addItem(error),
            () => addItem('completed')
        );

//sunscription2
/*
        var observer2 = observable.subscribe(
            (x: any) => addItem(x)
        );
*/
//using observer.unsubscribe() only unsubscribe from observer, not observer2
//to avoid that we create child subscriptions
    //observer.add(observer2);

    setTimeout( () => { var observer2 = observable.subscribe(
        (x: any) => addItem(x));
    }, 1000);

    function addItem(val:any) {
        var node = document.createElement("li");
        var textnode = document.createTextNode(val);
        node.appendChild(textnode);
        document.getElementById("output").appendChild(node);
    }