#!/usr/bin/env node

console.log("Hello, world!")

const name = process.argv[2] || ''

if (name) {
    console.log(`Hi, ${name}!`)
}