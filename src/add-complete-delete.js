var suite = (function() {
  // FACTS

  function getFacts(doc) {
    var input = doc.getElementsByClassName("new-todo")[0];
    return input ? { doc: doc, input: input } : undefined;
  }

  // STEPS

  function addCompleteDeleteSteps(numItems) {
    var steps = [];

    for (var i = 0; i < numItems; i++) {
      steps.push({ name: "Inputing " + i, work: inputTodo(i) });
      steps.push({ name: "Entering " + i, work: fireKey });
    }

    for (var i = 0; i < numItems; i++) {
      steps.push({ name: "Checking " + i, work: click("toggle", i) });
    }

    for (var i = 0; i < numItems; i++) {
      steps.push({ name: "Removing " + i, work: click("destroy", 0) });
    }

    return steps;
  }

  function inputTodo(number) {
    return function(facts) {
      var node = facts.input;

      var inputEvent = document.createEvent("Event");
      inputEvent.initEvent("input", true, true);
      node.value = "Nom Nom " + number;
      node.dispatchEvent(inputEvent);
    };
  }

  function pressEnter(facts) {
    var event = document.createEvent("Event");
    event.initEvent("keydown", true, true);
    event.key = "Enter";
    event.keyCode = 13;
    event.which = 13;
    facts.input.dispatchEvent(event);
  }

  function fireKey(facts) {
    let key = 13;
    if (document.createEventObject) {
      var eventObj = document.createEventObject();
      eventObj.keyCode = key;
      facts.fireEvent("onkeydown", eventObj);
      eventObj.keyCode = key;
    } else if (document.createEvent) {
      var eventObj = document.createEvent("Events");
      eventObj.initEvent("keydown", true, true);
      eventObj.which = key;
      eventObj.keyCode = key;
      let target = facts.doc.getElementsByClassName("new-todo")[0];
      target.dispatchEvent(eventObj);
    }
  }

  function click(className, index) {
    return function(facts) {
      facts.doc.getElementsByClassName(className)[index].click();
    };
  }

  // SUITE

  return {
    getFacts: getFacts,
    steps: addCompleteDeleteSteps(100)
  };
})();
