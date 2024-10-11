import React, {useState} from "react";
import {invoke} from "@tauri-apps/api/core";
import {Anchor, Button, Container, Input, Text, Title} from "@mantine/core";

export const MainPage: React.FC = () => {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <Container>
      <Title order={1}>Welcome to Tauri!</Title>
      <Anchor href="/router-test">testPage</Anchor>
      <Text>lorem ipsum </Text>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          void greet();
        }}
      >
        <Input
          onChange={(e) => { setName(e.currentTarget.value); }}
          placeholder="Enter a name..."
        />
        <Button type="submit">Greet</Button>
      </form>

      <Text>{greetMsg}</Text>
    </Container>
  )
}
