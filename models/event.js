var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt-nodejs');

	
var EventSchema = new Schema({   
    name: { type: String, required: true },
    hours: { type: Number, required: false, default: 0 },
    checked: { type: Boolean, default: false },
    date: { type: Date, required: false, default: Date.now() },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

var UpcomingEventSchema = new Schema({
    name: { type: String, required: true },
    timeStart: String,
    timeEnd: String,
    date: Date,
    location: String,
    description: String
});

module.exports = {
    events: mongoose.model('Events', EventSchema),
    upcomingEvents: mongoose.model('UpcomingEvents', UpcomingEventSchema)
};
