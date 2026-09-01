type VizKind = 'prophet' | 'resnet' | 'network';

export default function ProjectViz({ kind }: { kind: VizKind }) {
  if (kind === 'prophet') {
    return (
      <svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Prophet forecast vs ARIMA baseline chart">
        <line x1="0" y1="150" x2="420" y2="150" stroke="#333B4C" strokeWidth="1" />
        <polyline
          points="0,90 40,95 80,70 120,100 160,60 200,80 240,50 280,75 320,40 360,55 400,30"
          fill="none"
          stroke="#6E7688"
          strokeWidth="1.6"
          strokeDasharray="3,3"
        />
        <polyline
          points="0,92 40,88 80,78 120,92 160,68 200,72 240,58 280,66 320,48 360,50 400,36"
          fill="none"
          stroke="#E0993D"
          strokeWidth="2.4"
        />
        <circle cx="400" cy="36" r="3.5" fill="#E0993D" />
        <text x="0" y="170" fill="#6E7688" fontFamily="IBM Plex Mono" fontSize="10">
          ARIMA baseline
        </text>
        <text x="330" y="170" fill="#E0993D" fontFamily="IBM Plex Mono" fontSize="10">
          Prophet (ours)
        </text>
      </svg>
    );
  }

  if (kind === 'resnet') {
    return (
      <svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ResNet18 vs baseline CNN accuracy bar chart">
        <line x1="30" y1="150" x2="30" y2="20" stroke="#333B4C" strokeWidth="1" />
        <line x1="30" y1="150" x2="410" y2="150" stroke="#333B4C" strokeWidth="1" />
        <rect x="80" y="86" width="70" height="64" fill="#6E7688" />
        <text x="95" y="80" fill="#A7ADBD" fontFamily="IBM Plex Mono" fontSize="12">
          62%
        </text>
        <text x="80" y="168" fill="#6E7688" fontFamily="IBM Plex Mono" fontSize="10">
          Baseline CNN
        </text>
        <rect x="230" y="60" width="70" height="90" fill="#E0993D" />
        <text x="248" y="54" fill="#E0993D" fontFamily="IBM Plex Mono" fontSize="12">
          71%
        </text>
        <text x="245" y="168" fill="#E0993D" fontFamily="IBM Plex Mono" fontSize="10">
          ResNet18
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Network graph showing highest centrality node">
      <g stroke="#333B4C" strokeWidth="1">
        <line x1="60" y1="40" x2="200" y2="90" />
        <line x1="60" y1="140" x2="200" y2="90" />
        <line x1="110" y1="20" x2="200" y2="90" />
        <line x1="90" y1="160" x2="200" y2="90" />
        <line x1="200" y1="90" x2="330" y2="50" />
        <line x1="200" y1="90" x2="340" y2="110" />
        <line x1="200" y1="90" x2="300" y2="150" />
        <line x1="330" y1="50" x2="380" y2="30" />
        <line x1="340" y1="110" x2="390" y2="130" />
      </g>
      <circle cx="60" cy="40" r="4" fill="#6E7688" />
      <circle cx="60" cy="140" r="4" fill="#6E7688" />
      <circle cx="110" cy="20" r="4" fill="#6E7688" />
      <circle cx="90" cy="160" r="4" fill="#6E7688" />
      <circle cx="330" cy="50" r="4" fill="#6E7688" />
      <circle cx="340" cy="110" r="4" fill="#6E7688" />
      <circle cx="300" cy="150" r="4" fill="#6E7688" />
      <circle cx="380" cy="30" r="3" fill="#4A5164" />
      <circle cx="390" cy="130" r="3" fill="#4A5164" />
      <circle cx="200" cy="90" r="9" fill="#E0993D" />
      <text x="215" y="94" fill="#E0993D" fontFamily="IBM Plex Mono" fontSize="11">
        highest centrality
      </text>
    </svg>
  );
}
