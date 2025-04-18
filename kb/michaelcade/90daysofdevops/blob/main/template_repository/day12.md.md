# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day12.md
Language: python

## Snippet: Simulating a Quantum Circuit in Qiskit
Description: Shows how to simulate a quantum circuit using Qiskit's Aer simulator. The code creates a quantum circuit with Hadamard and CNOT gates, simulates it for multiple shots, and displays the measurement results.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day12.md#2025-04-17_snippet_2
Language: python

```python
from qiskit import Aer, transpile, execute
from qiskit.visualization import plot_histogram

# Get the Aer simulator backend
simulator = Aer.get_backend('qasm_simulator')

# Execute the circuit on the simulator
job = execute(qc, simulator, shots=1000)

# Get the results
result = job.result()

# Get the counts (measurement outcomes)
counts = result.get_counts(qc)

# Print the measurement outcomes
print(counts)

# Plot a histogram of the results
plot_histogram(counts)
```

## Snippet: Implementing Quantum Teleportation in Qiskit
Description: A complete implementation of the quantum teleportation protocol using Qiskit. This code creates a circuit with three qubits, initializes a state to be teleported, and demonstrates the complete teleportation process with necessary quantum gates and measurements.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day12.md#2025-04-17_snippet_3
Language: python

```python
from qiskit import QuantumCircuit, Aer, execute
from qiskit.visualization import plot_histogram
import numpy as np

# Create a quantum circuit with 3 qubits and 2 classical bits
qc = QuantumCircuit(3, 2)

# Prepare the state to teleport (on qubit 0)
qc.x(0)  # Let's teleport |1⟩. You can change this to any state preparation.

# Create entanglement between qubits 1 and 2
qc.h(1)
qc.cx(1, 2)

# Bell measurement on qubits 0 and 1
qc.cx(0, 1)
qc.h(0)
qc.measure([0, 1], [0, 1])

# Apply corrections to qubit 2 based on measurement results
qc.z(2).c_if(0, 1)  # Apply Z if qubit 0 was measured as 1
qc.x(2).c_if(1, 1)  # Apply X if qubit 1 was measured as 1

# Draw the circuit
qc.draw()
```

## Snippet: Creating a Simple Quantum Circuit with Qiskit
Description: Demonstrates how to create a basic quantum circuit with two qubits and two classical bits, apply Hadamard and CX gates, and measure the results. This example shows the fundamental building blocks of a quantum program.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day12.md#2025-04-17_snippet_1
Language: python

```python
from qiskit import QuantumCircuit

# Create a quantum circuit with 2 qubits and 2 classical bits
qc = QuantumCircuit(2, 2)

# Add a Hadamard gate to qubit 0
qc.h(0)

# Add a CX (CNOT) gate with control qubit 0 and target qubit 1
qc.cx(0, 1)

# Measure qubits 0 and 1 into classical bits 0 and 1
qc.measure([0, 1], [0, 1])

# Draw the circuit
qc.draw()
```

## Snippet: Accessing IBM Quantum Hardware with Qiskit
Description: Demonstrates how to connect to IBM Quantum Experience, select a real quantum device, and execute a quantum circuit on actual quantum hardware. The snippet includes authentication, device selection, and job execution with result visualization.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day12.md#2025-04-17_snippet_4
Language: python

```python
from qiskit import IBMQ, execute
from qiskit.providers.ibmq import least_busy
from qiskit.tools.monitor import job_monitor

# Load your IBM Quantum account
IBMQ.save_account('YOUR_API_TOKEN')
IBMQ.load_account()

# Get the provider and select a backend
provider = IBMQ.get_provider(hub='ibm-q')

# Choose the least busy backend with at least 2 qubits
backends = provider.backends(filters=lambda x: x.configuration().n_qubits >= 2 and 
                              not x.configuration().simulator and x.status().operational==True)
backend = least_busy(backends)
print(f"We'll use the {backend.name()} device")

# Run the circuit on the selected quantum computer
job = execute(qc, backend=backend, shots=1024)

# Monitor the job status
job_monitor(job)

# Get the results
result = job.result()
counts = result.get_counts(qc)
print(counts)

# Plot the results
plot_histogram(counts)
```

## Snippet: Installing Qiskit and Required Packages in Python
Description: Instructions for installing Qiskit, IBM's quantum computing framework, along with necessary visualization tools. This snippet shows the pip commands needed to set up the quantum computing environment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day12.md#2025-04-17_snippet_0
Language: python

```python
pip install qiskit
pip install qiskit-aer
pip install matplotlib
pip install pylatexenc
```