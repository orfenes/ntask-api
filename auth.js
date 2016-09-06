import passport from "passport";
import {Strategy} from "passsport-jwt";

module.exports = app => {
  const Users = app.db.models.Users;
  const cfg = app.libs.configs;
  const strategy = new Strategy({secretOrKey: cfg.jwtSecret},
    (payload, done) => {
      Users.findById(payload.id)
        .then(user => {
          if(user){
            return done(null, {id: user.id, email: user.email});
          }
          return done(null, false);
        })
        .catch(error => done(error, null));
    });

  passport.use(strategy);
  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: () => {
      return passport.authenticate("jwt", cfg.jwtSession);
    }
  };
};

