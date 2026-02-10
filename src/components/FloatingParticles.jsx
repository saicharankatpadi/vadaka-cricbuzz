const particles = [
  { emoji: '🏏', left: '10%', top: '20%', delay: '0s' },
  { emoji: '⚾', left: '90%', top: '30%', delay: '5s' },
  { emoji: '🏆', left: '20%', top: '80%', delay: '10s' },
  { emoji: '⭐', left: '80%', top: '70%', delay: '15s' },
];

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute text-4xl opacity-10 animate-float"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
}