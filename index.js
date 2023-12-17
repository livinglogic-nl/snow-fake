import crypto from 'crypto';
import { predicates, objects, teams, collections } from 'friendly-words';

const all = [
  ...predicates,
  ...objects,
  ...teams,
  ...collections,
];

export const rand = (arr) => {
  const r = Math.floor(Math.random() * arr.length);
  return arr[ r ];
}
export const string = (options = {}) => {
  const { min, max } = options;
  if(min === undefined) {
    return rand(objects);
  }

  let result = rand(all);
  while(result.length < min) {
    result += ' ' + rand(all);
  }
  if(max === undefined) {
    return result;
  }
  return result.substring(0,max);
}

export const bool = (options = {}) => {
  return rand([false,true]);
}

export const int = (options = {}) => {
  let { min, max } = options;
  if(min === undefined) { min = 0; }
  if(max === undefined) { max = 10000; }

  return min + Math.floor(Math.random() * (max-min));
}

export const firstname = (options = {}) => {
  return rand(predicates);
}
export const lastname = (options = {}) => {
  return rand(collections);
}

const emailProviders = [
  'gmail.com',
  'hotmail.com',
  'yahoo.com',
  'outlook.com',
];

export const email = (options = {}) => {
  return firstname() + '.' + lastname() + '@' + rand(emailProviders);
}

export const uuid = (options = {}) => {
  return crypto.randomUUID();
}

