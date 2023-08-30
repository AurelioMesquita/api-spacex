import { Schema } from 'mongoose';
const mongoose = require('mongoose');

export interface ILaunche {
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: string[];
  };
  links: {
    patch: {
      small: string;
      large: string;
    };
    reddit: {
      campaign: string | null;
      launch: string | null;
      media: string | null;
      recovery: string | null;
    };
    flickr: {
      small: string[];
      original: string[];
    };
    presskit: string | null;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
  };
  static_fire_date_utc: Date;
  static_fire_date_unix: number;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: {
    time: number;
    altitude: number | null;
    reason: string;
  }[];
  details: string;
  crew: string[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: Date;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: {
    core: string;
    flight: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    landing_attempt: boolean;
    landing_success: boolean | null;
    landing_type: string | null;
    landpad: string | null;
  }[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: string | null;
  createdAt?: Date;
}

export const Launche = new Schema<ILaunche>({
  fairings: {
    reused: Boolean,
    recovery_attempt: Boolean,
    recovered: Boolean,
    ships: [String]
  },
  links: {
    patch: {
      small: String,
      large: String
    },
    reddit: {
      campaign: String,
      launch: String,
      media: String,
      recovery: String
    },
    flickr: {
      small: [String],
      original: [String]
    },
    presskit: String,
    webcast: String,
    youtube_id: String,
    article: String,
    wikipedia: String
  },
  static_fire_date_utc: Date,
  static_fire_date_unix: Number,
  net: Boolean,
  window: Number,
  rocket: String,
  success: Boolean,
  failures: [
    {
      time: Number,
      altitude: Number,
      reason: String
    }
  ],
  details: String,
  crew: [String],
  ships: [String],
  capsules: [String],
  payloads: [String],
  launchpad: String,
  flight_number: Number,
  name: String,
  date_utc: Date,
  date_unix: Number,
  date_local: String,
  date_precision: String,
  upcoming: Boolean,
  cores: [
    {
      core: String,
      flight: Number,
      gridfins: Boolean,
      legs: Boolean,
      reused: Boolean,
      landing_attempt: Boolean,
      landing_success: Boolean,
      landing_type: String,
      landpad: String
    }
  ],
  auto_update: Boolean,
  tbd: Boolean,
  launch_library_id: String,
},
  { timestamps: true },
);


export const Launcher = mongoose.model('Launcher', Launche);


