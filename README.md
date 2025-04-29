# Coin Toss Simulator

A high-quality, responsive coin toss simulator with realistic animations and special outcome patterns.

## Features

- Realistic coin flipping animation with 6-7 second duration
- Pattern-based outcome logic (2 consecutive heads → tails, 2 consecutive tails → heads)
- Responsive design optimized for both mobile and desktop
- High-quality coin graphics with realistic appearance
- Interactive toss button with visual feedback
- Result history tracking
- Sound effects for enhanced user experience

## Technologies Used

- HTML5
- CSS3 (with modern animations and effects)
- Vanilla JavaScript (ES6+)
- Vite (for development and building)

## How to Use

1. Click the "TOSS COIN" button to flip the coin
2. Wait for the animation to complete (6-7 seconds)
3. See the result displayed below the coin
4. The history section shows your previous tosses

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Implementation Notes

The coin toss logic follows a special pattern: after two consecutive heads, the next toss will be tails; after two consecutive tails, the next toss will be heads.