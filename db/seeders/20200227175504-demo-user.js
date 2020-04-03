'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
          firstName: "Lotty",
          lastName: "Benoey",
          email: "lbenoey0@eepurl.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Shirleen",
          lastName: "Stailey",
          email: "sstailey1@biblegateway.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Lorianna",
          lastName: "Pettican",
          email: "lpettican2@skype.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Ellie",
          lastName: "Van Rembrandt",
          email: "evanrembrandt3@businessinsider.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Ave",
          lastName: "Anstie",
          email: "aanstie4@google.com.au",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Otho",
          lastName: "Pardue",
          email: "opardue5@bloomberg.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Theressa",
          lastName: "Payfoot",
          email: "tpayfoot6@eventbrite.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Eddie",
          lastName: "Feacham",
          email: "efeacham7@hatena.ne.jp",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Ellwood",
          lastName: "Guidera",
          email: "eguidera8@geocities.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Vyky",
          lastName: "Allsworth",
          email: "vallsworth9@scribd.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Waldo",
          lastName: "MacAree",
          email: "wmacareea@cafepress.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Theodosia",
          lastName: "Wasiel",
          email: "twasielb@plala.or.jp",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Lawton",
          lastName: "Mazella",
          email: "lmazellac@nsw.gov.au",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Caryl",
          lastName: "Eich",
          email: "ceichd@w3.org",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Isaak",
          lastName: "Kimmerling",
          email: "ikimmerlinge@buzzfeed.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Mandel",
          lastName: "Demaine",
          email: "mdemainef@google.ca",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Ignace",
          lastName: "Stable",
          email: "istableg@cisco.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Clarissa",
          lastName: "Hillatt",
          email: "chillatth@utexas.edu",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Luce",
          lastName: "Croote",
          email: "lcrootei@woothemes.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Seamus",
          lastName: "Espino",
          email: "sespinoj@washingtonpost.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};