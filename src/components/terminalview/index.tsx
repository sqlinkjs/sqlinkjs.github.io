import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import styles from './styles.module.css';

function TerminalView({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={styles.terminal}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalControls}>
          <div className={styles.terminalButtons}>
            <div className={`${styles.terminalButton} ${styles.red}`}></div>
            <div className={`${styles.terminalButton} ${styles.yellow}`}></div>
            <div className={`${styles.terminalButton} ${styles.green}`}></div>
          </div>
          <span className={styles.terminalTitle}>Terminal</span>
        </div>
        <button
          onClick={handleCopy}
          className={styles.copyButton}
          title={copied ? 'Copied!' : 'Copy to clipboard'}
        >
          {copied ? (
            <Check size={16} className={styles.copyIcon} />
          ) : (
            <Copy size={16} className={styles.copyIcon} />
          )}
        </button>
      </div>

      <div className={styles.terminalContent}>
        <div className={styles.terminalLine}>
          <span className={styles.prompt}>$</span>
          <div className={styles.terminalText}>
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TerminalView;