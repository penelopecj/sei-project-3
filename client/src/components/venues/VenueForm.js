import React from 'react'
// import { Link } from 'react-router-dom'

function VenueForm({ handleChange, handleSubmit, formdata, errors }) {

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label className="block-form">Venue Name</label>
      <input 
        className="block-form"
        type="text" 
        name="name"  
        placeholder="Venue Name" 
        onChange={handleChange} 
        value={formdata.name}
      />
      {errors ? 
        <div>
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        :
        <div></div>
      }
      <label className="block-form">Venue City</label>
      <input 
        className="block-form"
        type="text" 
        name="city"  
        placeholder="Venue City" 
        onChange={handleChange} 
        value={formdata.city}
      />
      {errors ? 
        <div>
          {errors.city && <p className="error-message">{errors.city}</p>}
        </div>
        :
        <div></div>
      }
      <label className="block-form">Venue Country</label>
      <input 
        className="block-form"
        type="text" 
        name="country"  
        placeholder="Venue Country" 
        onChange={handleChange} 
        value={formdata.country}
      />
      {errors ? 
        <div>
          {errors.country && <p className="error-message">{errors.country}</p>}
        </div>
        :
        <div></div>
      }
      <label className="block-form">Venue Continent</label>
      <input 
        className="block-form"
        type="text" 
        name="continent"  
        placeholder="Venue Continent" 
        onChange={handleChange} 
        value={formdata.continent}
      />
      {errors ? 
        <div>
          {errors.continent && <p className="error-message">{errors.continent}</p>}
        </div>
        :
        <div></div>
      }
      <label className="block-form">Image URL</label>
      <input 
        className="block-form"
        type="text" 
        name="venueImage" 
        placeholder="E.g. https://www.wembleystadium.com/-/media/Project/WembleyStadium/venue-hire/wembley-stadium-seating_800.ashx" 
        onChange={handleChange} 
        value={formdata.venueImage}
      />
      {errors ? 
        <div>
          {errors.venueImage && <p className="error-message">{errors.venueImage}</p>}
        </div>
        :
        <div></div>
      }
      <div className="side-note">
        <label className="block-form">Latitude</label>
        <div className="index-header venue-not-on-list">
          <p>Don&apos;t know the latitude and longitude?</p>
          <button>
            <a href="https://www.latlong.net/" target="_blank" rel="noreferrer">Find Out Here </a>
          </button>
        </div>
      </div>
      <input 
        className="block-form"
        type="text" 
        name="latitude" 
        placeholder="E.g. 51.5014" 
        onChange={handleChange} 
        value={formdata.latitude}
      />
      {errors ? 
        <div>
          {errors.latitude && <p className="error-message">{errors.latitude}</p>}
        </div>
        :
        <div></div>
      }
      <label className="block-form">Longitude</label>
      <input 
        className="block-form"
        type="text" 
        name="longitude" 
        placeholder="E.g. 0.1419" 
        onChange={handleChange} 
        value={formdata.longitude}
      />
      {errors ? 
        <div>
          {errors.longitude && <p className="error-message">{errors.longitude}</p>}
        </div>
        :
        <div></div>
      }
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  )
}

export default VenueForm