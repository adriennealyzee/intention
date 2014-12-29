 // js/app.js

  var app = app || {};
  var ENTER_KEY = 13;

  $(function() {

    // Kick things off by creating the **App**.
    new app.AppView();

    // Today 3 goals
    if (!((app.Todos).at(1))){
      app.Todos.create({ category: 'today', title: '[o] Complete a 40mi bike ride\n\n[o] Write short blogpost on takeaways from Tony Robbins seminar\n\n[o] Finish coding landing page'});
      app.Todos.create({ category: 'week', title: '[o] Finish 500km Strava bike challenge\n\n[o] Acquire 100 new subscribers for my blog\n\n[o] Beta-test product on 5 users'});
      app.Todos.create({ category: 'month', title: '[o] Lose 2 pounds\n\n[o] Be featured in Wall Street Journal\n\n[o] Launch product and release to public'});
      app.Todos.create({ category: 'year', title: '[o] Complete a triathlon\n\n[o] Get a book published\n\n[o] Make an impact on 10,000 users'});
      app.Todos.create({ category: '5 years', title: '[o] Climb Mount Kilimanjaro\n\n[o] Speak at TED\n\n[o] Earn $10 million in revenue through my company'});
    }



  });