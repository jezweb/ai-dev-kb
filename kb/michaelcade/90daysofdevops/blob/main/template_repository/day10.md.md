# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day10.md
Language: bash

## Snippet: Creating Virtual Ethernet Cable Between Namespaces
Description: Command to create a virtual ethernet pair (veth) to connect two network namespaces. This essentially creates a virtual network cable between the namespaces.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day10.md#2025-04-17_snippet_3
Language: bash

```bash
sudo ip link add veth-red type veth peer name veth-blue
```

## Snippet: Verifying Interface Assignment in Namespaces
Description: Commands to verify that the virtual interfaces have been properly assigned to their respective namespaces. Shows the namespace-specific network configurations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day10.md#2025-04-17_snippet_6
Language: bash

```bash
sudo ip netns exec red ip link list
sudo ip netns exec blue ip link list
```

## Snippet: Testing Bidirectional Connectivity Between Namespaces
Description: Command to test ping connectivity in the reverse direction (from blue to red namespace). This confirms bidirectional communication is working.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day10.md#2025-04-17_snippet_10
Language: bash

```bash
sudo ip netns exec blue ping 192.168.15.1
```

## Snippet: Creating Linux Network Namespaces
Description: Commands to create and verify Linux network namespaces called red and blue. This establishes isolated network environments that can be configured separately.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day10.md#2025-04-17_snippet_0
Language: bash

```bash
sudo ip netns add red
sudo ip netns add blue
ip netns list
```

## Snippet: Exploring Default Namespace Configuration
Description: Command to check the loopback interface in a newly created namespace. This shows that a new namespace has its own isolated network stack.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day10.md#2025-04-17_snippet_1
Language: bash

```bash
sudo ip netns exec red ip link list
```

## Snippet: Enabling Virtual Interfaces in Namespaces
Description: Commands to bring up the virtual interfaces in each namespace. This activates the connection between the namespaces.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day10.md#2025-04-17_snippet_8
Language: bash

```bash
sudo ip netns exec red ip link set veth-red up
sudo ip netns exec blue ip link set veth-blue up
```

## Snippet: Testing Connectivity Between Namespaces
Description: Command to test ping connectivity from one namespace to another. This verifies that the network configuration allows communication between isolated namespaces.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day10.md#2025-04-17_snippet_9
Language: bash

```bash
sudo ip netns exec red ping 192.168.15.2
```

## Snippet: Enabling Loopback Interface in Namespace
Description: Commands to bring up the loopback interface in the red namespace. This is necessary for proper networking within the namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day10.md#2025-04-17_snippet_2
Language: bash

```bash
sudo ip netns exec red ip link set lo up
sudo ip netns exec red ip link list
```

## Snippet: Configuring IP Addresses for Virtual Interfaces
Description: Commands to assign IP addresses to the virtual interfaces in each namespace. This allows proper IP communication between the namespaces.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day10.md#2025-04-17_snippet_7
Language: bash

```bash
sudo ip netns exec red ip addr add 192.168.15.1/24 dev veth-red
sudo ip netns exec blue ip addr add 192.168.15.2/24 dev veth-blue
```

## Snippet: Moving Virtual Interfaces to Respective Namespaces
Description: Commands to move the virtual ethernet interfaces to their respective network namespaces. This connects the namespaces together with the virtual cable.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day10.md#2025-04-17_snippet_5
Language: bash

```bash
sudo ip link set veth-red netns red
sudo ip link set veth-blue netns blue
```

## Snippet: Viewing Default Network Interfaces
Description: Command to view all network interfaces in the default namespace. Shows the newly created virtual ethernet devices before they're moved to specific namespaces.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day10.md#2025-04-17_snippet_4
Language: bash

```bash
ip link list
```

## Snippet: Creating arp Table Entry in Namespace
Description: Command to check the ARP table in a namespace. This shows how each namespace maintains its own ARP cache for network address resolution.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day10.md#2025-04-17_snippet_11
Language: bash

```bash
sudo ip netns exec red arp
```