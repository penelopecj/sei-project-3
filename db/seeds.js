import mongoose from 'mongoose'
import connectToDatabase from '../lib/connectToDb.js'
import Event from '../models/event.js'
import Venue from '../models/venue.js'
import eventData from './data/events.js'
import venueData from './data/venues.js'

async function seedDatabase() {
  try {
    await connectToDatabase()

    console.log('🤖 Database connected')

    await mongoose.connection.db.dropDatabase()

    console.log('🤖 Database dropped')

    const venues = await Venue.create(venueData)

    console.log(`🤖 ${venues.length} venues created`)

    const eventDataWithVenues = eventData.map(item => {
      item.venue = venues[0]._id
      return item
    })

    const events = await Event.create(eventDataWithVenues)

    console.log(`🤖 ${events.length} events created`)

    await mongoose.connection.close()
    console.log('🤖 Goodbye')

  } catch (err) {
    console.log('🤖 Something went wrong')
    console.log(err)

    await mongoose.connection.close()
    console.log('🤖 Goodbye')
  }
}

seedDatabase()